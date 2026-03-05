import { sql } from "drizzle-orm";
import { pgTable, text, varchar, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const programs = pgTable("programs", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  category: text("category").notNull(),
  region: text("region").notNull(),
  stage: text("stage").notNull(),
  bestFor: text("best_for").notNull(),
  trigger: text("trigger").notNull(),
  productionSystems: text("production_systems").notNull().default(""),
  techDomains: text("tech_domains").notNull().default(""),
});

export const submissions = pgTable("submissions", {
  id: serial("id").primaryKey(),
  programName: text("program_name").notNull(),
  bestFor: text("best_for").notNull(),
  submitterName: text("submitter_name").notNull(),
  submitterEmail: text("submitter_email").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertProgramSchema = createInsertSchema(programs).omit({ id: true });
export const insertSubmissionSchema = createInsertSchema(submissions).omit({ id: true, createdAt: true });

export type InsertProgram = z.infer<typeof insertProgramSchema>;
export type Program = typeof programs.$inferSelect;
export type InsertSubmission = z.infer<typeof insertSubmissionSchema>;
export type Submission = typeof submissions.$inferSelect;
