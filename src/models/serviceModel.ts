import mongoose from 'mongoose';
import { z } from 'zod';

// Zod schema
export const serviceSchema = z.object({
  id: z.string(),
  category: z.string(),
  title: z.string(),
  details: z.string(),
  subDetails: z.array(z.string()),
  imageSrc: z.string(),
});

export type Service = z.infer<typeof serviceSchema>;

// Mongoose Schema
const ServiceSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  title: { type: String, required: true },
  details: { type: String, required: true },
  subDetails: { type: [String], required: true },
  imageSrc: { type: String, required: true },
});

const ServiceModel = mongoose.model<Service>('Service', ServiceSchema);

export default ServiceModel;
