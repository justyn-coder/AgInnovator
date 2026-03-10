import { pgTable, text, serial, timestamp, boolean, integer, date } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const programs = pgTable("programs", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  category: text("category").notNull(),
  description: text("description"),
  useCase: text("use_case").array(),
  province: text("province").array(),
  website: text("website"),
  national: boolean("national").default(false),
  agFoodPrimary: boolean("ag_food_primary"),
  stage: text("stage").array(),
  productionSystems: text("production_systems").array(),
  techDomains: text("tech_domains").array(),
  cohortBased: boolean("cohort_based"),
  intakeFrequency: text("intake_frequency"),
  fundingType: text("funding_type"),
  fundingStageLabel: text("funding_stage_label"),
  fundingMaxCad: integer("funding_max_cad"),
  mandateStage: text("mandate_stage").array(),
  mentorship: boolean("mentorship"),
  capacityNotes: text("capacity_notes"),
  status: text("status").default("unverified"),
  verifiedAt: date("verified_at"),
  verifiedBy: text("verified_by"),
  claimed: boolean("claimed").default(false),
  source: text("source").default("manual"),
  notes: text("notes"),
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
