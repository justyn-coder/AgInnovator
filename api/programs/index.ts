import type { VercelRequest, VercelResponse } from "@vercel/node";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { programs } from "../../shared/schema";

const client = postgres(process.env.DATABASE_URL!);
const db = drizzle(client);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  try {
    const result = await db.select().from(programs);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching programs:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
