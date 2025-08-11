import mongoose from 'mongoose';
import { z } from 'zod';

// Zod schema
export const experienceSchema = z.object({
  
  title: z.string(),
  company: z.string(),
  location: z.string(),
  duration: z.string(),
  description: z.string(),
  responsibilities: z.array(z.string()),
});

export type Experience = z.infer<typeof experienceSchema>;

// Mongoose Schema
const ExperienceSchema = new mongoose.Schema({
  
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  duration: { type: String, required: true },
  description: { type: String, required: true },
  responsibilities: { type: [String], required: true },
});

const ExperienceModel = mongoose.model<Experience>('Experience', ExperienceSchema);

export default ExperienceModel;
