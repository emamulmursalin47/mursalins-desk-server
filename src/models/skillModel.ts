import mongoose from 'mongoose';
import { z } from 'zod';

// Zod schema
export const skillSchema = z.object({
  
  title: z.string(),
  description: z.string(),
  image: z.string(),
  category: z.string(),
});

export type Skill = z.infer<typeof skillSchema>;

// Mongoose Schema
const SkillSchema = new mongoose.Schema({
  
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
});

const SkillModel = mongoose.model<Skill>('Skill', SkillSchema);

export default SkillModel;
