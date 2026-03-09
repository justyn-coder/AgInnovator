import type { VercelRequest, VercelResponse } from "@vercel/node";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { submissions, insertSubmissionSchema } from "../../shared/schema";

const connectionString = process.env.POSTGRES_URL || process.env.DATABASE_URL;
if (!connectionString) throw new Error("No database connection string found");

const client = postgres(connectionString, { ssl: "require", max: 1 });
const db = drizzle(client);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "GET") {
    try {
      const result = await db.select().from(submissions);
      return res.status(200).json(result);
    } catch (error) {
      console.error("Error fetching submissions:", error);
      return res.status(500).json({ message: "Internal server error", error: String(error) });
    }
  }
  if (req.method === "POST") {
    const parsed = insertSubmissionSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: "Invalid submission data", errors: parsed.error.issues });
    }
    try {
      const [submission] = await db.insert(submissions).values(parsed.data).returning();
      return res.status(201).json(submission);
    } catch (error) {
      console.error("Error creating submission:", error);
      return res.status(500).json({ message: "Internal server error", error: String(error) });
    }
  }
  return res.status(405).json({ message: "Method not allowed" });
}
