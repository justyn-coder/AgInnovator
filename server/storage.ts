import { type Program, type InsertProgram, type Submission, type InsertSubmission, programs, submissions } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getPrograms(): Promise<Program[]>;
  getProgram(id: number): Promise<Program | undefined>;
  insertProgram(program: InsertProgram): Promise<Program>;
  insertPrograms(programList: InsertProgram[]): Promise<void>;
  getProgramCount(): Promise<number>;
  createSubmission(submission: InsertSubmission): Promise<Submission>;
  getSubmissions(): Promise<Submission[]>;
}

export class DatabaseStorage implements IStorage {
  async getPrograms(): Promise<Program[]> {
    return await db.select().from(programs);
  }

  async getProgram(id: number): Promise<Program | undefined> {
    const [program] = await db.select().from(programs).where(eq(programs.id, id));
    return program;
  }

  async insertProgram(program: InsertProgram): Promise<Program> {
    const [result] = await db.insert(programs).values(program).returning();
    return result;
  }

  async insertPrograms(programList: InsertProgram[]): Promise<void> {
    if (programList.length === 0) return;
    await db.insert(programs).values(programList);
  }

  async getProgramCount(): Promise<number> {
    const result = await db.select().from(programs);
    return result.length;
  }

  async createSubmission(submission: InsertSubmission): Promise<Submission> {
    const [result] = await db.insert(submissions).values(submission).returning();
    return result;
  }

  async getSubmissions(): Promise<Submission[]> {
    return await db.select().from(submissions);
  }
}

export const storage = new DatabaseStorage();
