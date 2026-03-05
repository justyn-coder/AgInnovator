import type { Express } from "express";
import { type Server } from "http";
import { storage } from "./storage";
import { insertSubmissionSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get("/api/programs", async (_req, res) => {
    const programs = await storage.getPrograms();
    res.json(programs);
  });

  app.get("/api/programs/count", async (_req, res) => {
    const count = await storage.getProgramCount();
    res.json({ count });
  });

  app.post("/api/submissions", async (req, res) => {
    const parsed = insertSubmissionSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: "Invalid submission data", errors: parsed.error.issues });
    }
    const submission = await storage.createSubmission(parsed.data);
    res.status(201).json(submission);
  });

  app.get("/api/submissions", async (_req, res) => {
    const submissions = await storage.getSubmissions();
    res.json(submissions);
  });

  return httpServer;
}
