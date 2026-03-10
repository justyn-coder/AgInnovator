import type { VercelRequest, VercelResponse } from "@vercel/node";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { programs } from "../schema";

const connectionString = process.env.POSTGRES_URL || process.env.DATABASE_URL;
if (!connectionString) throw new Error("No database connection string found");

const client = postgres(connectionString, { ssl: "require", max: 1 });
const db = drizzle(client);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  try {
    const result = await db.select().from(programs).orderBy(programs.name);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching programs:", error);
    return res.status(500).json({ message: "Internal server error", error: String(error) });
  }
}
