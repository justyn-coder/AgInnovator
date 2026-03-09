import type { VercelRequest, VercelResponse } from "@vercel/node";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { submissions } from "../../shared/schema";
import { insertSubmissionSchema } from "../../shared/schema";

const client = postgres(process.env.DATABASE_URL!);
const db = drizzle(client);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "GET") {
    try {
      const result = await db.select().from(submissions);
      return res.status(200).json(result);
    } catch (error) {
      console.error("Error fetching submissions:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  if (req.method === "POST") {
    const parsed = insertSubmissionSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        message: "Invalid submission data",
        errors: parsed.error.issues,
      });
    }
    try {
      const [submission] = await db
        .insert(submissions)
        .values(parsed.data)
        .returning();
      return res.status(201).json(submission);
    } catch (error) {
      console.error("Error creating submission:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  return res.status(405).json({ message: "Method not allowed" });
}
