import mongoose from 'mongoose';
import { z } from 'zod';

// Zod schema (kept for potential validation use cases)
export const projectSchema = z.object({
  _id: z.string().optional(),
  id: z.string(), // Re-added id to Zod schema
  title: z.string(),
  description: z.string(),
  technologies: z.array(z.string()),
  techColors: z.array(z.string()),
  imageUrl: z.string().url(),
  projectUrl: z.string().url(),
  githubUrl: z.string().url(),
  features: z.array(z.string()),
  challenges: z.string(),
  learnings: z.string(),
});

export type Project = z.infer<typeof projectSchema>;

// Mongoose Schema
const ProjectSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true }, // Re-added id to Mongoose schema
  title: { type: String, required: true },
  description: { type: String, required: true },
  technologies: { type: [String], required: true },
  techColors: { type: [String], required: true },
  imageUrl: { type: String, required: true },
  projectUrl: { type: String, required: true },
  githubUrl: { type: String, required: true },
  features: { type: [String], required: true },
  challenges: { type: String, required: true },
  learnings: { type: String, required: true },
});

const ProjectModel = mongoose.model<Project>('Project', ProjectSchema);

export default ProjectModel;