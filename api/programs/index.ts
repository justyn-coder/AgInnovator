import type { VercelRequest, VercelResponse } from "@vercel/node";
import postgres from "postgres";

const connectionString = process.env.POSTGRES_URL || process.env.DATABASE_URL;
if (!connectionString) throw new Error("No database connection string found");

const client = postgres(connectionString, { ssl: "require", max: 1 });

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { message, mode, history } = req.body as {
    message: string;
    mode: string; // "e" = entrepreneur, "ec" = ecosystem operator
    history: { role: string; content: string }[];
  };

  if (!message?.trim()) {
    return res.status(400).json({ message: "No message provided" });
  }

  if (!ANTHROPIC_API_KEY) {
    return res.status(500).json({ message: "API key not configured" });
  }

  try {
    // 1. Fetch relevant programs from DB (filter by keywords in name/description)
    const words = message.toLowerCase().split(/\s+/).filter(w => w.length > 3);
    const provinceMatch = /\b(alberta|ab|saskatchewan|sk|manitoba|mb|british columbia|bc|ontario|on|quebec|qc)\b/i.exec(message);
    const detectedProvince = provinceMatch ? provinceMatch[0].toUpperCase().slice(0, 2) : null;

    let programsResult;
    if (detectedProvince && ["AB", "SK", "MB", "BC", "ON", "QC"].includes(detectedProvince)) {
      programsResult = await client`
        SELECT name, category, description, province, website, stage, use_case, funding_type, mentorship, notes
        FROM programs
        WHERE (${detectedProvince} = ANY(province) OR national = true)
        ORDER BY name
        LIMIT 40
      `;
    } else {
      programsResult = await client`
        SELECT name, category, description, province, website, stage, use_case, funding_type, mentorship, notes
        FROM programs
        ORDER BY name
        LIMIT 50
      `;
    }

    // 2. Fetch relevant knowledge entries (match by tags or province)
    const knowledgeResult = await client`
      SELECT title, body, tags, province, category
      FROM knowledge
      WHERE (
        ${detectedProvince} = ANY(province)
        OR array_length(province, 1) IS NULL
      )
      ORDER BY created_at DESC
      LIMIT 8
    `;

    // 3. Build context strings
    const programContext = programsResult.map((p: any) =>
      `[${p.category}] ${p.name} | Province: ${(p.province || []).join(", ") || "National"} | Stage: ${(p.stage || []).join(", ")} | Funding: ${p.funding_type || "varies"} | ${p.description?.slice(0, 180) || ""}`
    ).join("\n");

    const knowledgeContext = knowledgeResult.map((k: any) =>
      `INSIGHT — ${k.title}:\n${k.body}`
    ).join("\n\n");

    const isEco = mode === "ec";

    const systemPrompt = isEco
      ? `You are the Canadian Ag Innovation Navigator — an ecosystem intelligence tool for operators, investors, and program managers analyzing the Canadian agtech innovation landscape.

Your job: surface gaps, overlaps, partnership opportunities, and strategic insights across the Canadian ag innovation ecosystem.

ECOSYSTEM DATA (${programsResult.length} programs):
${programContext}

ECOSYSTEM INTELLIGENCE:
${knowledgeContext}

Rules:
- Be direct and specific. Name programs, orgs, and gaps by name.
- Lead with the most important insight, not background.
- Use ## headers for sections, ** for key terms.
- Max 400 words. Dense, not fluffy.
- Always end with 1–2 concrete next actions for an ecosystem operator.`

      : `You are the Canadian Ag Innovation Navigator — helping agtech founders and farm operators find the right programs, funding, and support across Canada.

Your job: match the founder's situation to the best-fit programs and give a clear recommended pathway.

PROGRAM DATABASE (${programsResult.length} programs):
${programContext}

ECOSYSTEM INTELLIGENCE:
${knowledgeContext}

Rules:
- Ask yourself: what stage is this person at? What do they need most right now?
- Recommend 3–5 specific programs with a 1-sentence reason each.
- Be direct. Don't hedge. Don't list everything — rank what matters.
- Use ## headers for sections, ** for program names.
- Max 400 words.
- End with: "Your next step:" and one concrete action.`;

    // 4. Call Claude API
    const messages = [
      ...(history || []).slice(-6), // keep last 3 turns for context
      { role: "user", content: message }
    ];

    const claudeRes = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1024,
        system: systemPrompt,
        messages,
      }),
    });

    if (!claudeRes.ok) {
      const err = await claudeRes.text();
      console.error("Claude API error:", err);
      return res.status(500).json({ message: "AI service error", detail: err });
    }

    const claudeData = await claudeRes.json() as any;
    const reply = claudeData.content?.[0]?.text || "No response generated.";

    return res.status(200).json({ reply });

  } catch (error) {
    console.error("Chat handler error:", error);
    return res.status(500).json({ message: "Internal server error", error: String(error) });
  }
}
