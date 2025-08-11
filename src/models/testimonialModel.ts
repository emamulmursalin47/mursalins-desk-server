import mongoose from 'mongoose';
import { z } from 'zod';

// Zod schema
export const testimonialSchema = z.object({
  id: z.string(),
  image: z.string(),
  name: z.string(),
  handle: z.string(),
  date: z.string(),
  testimonial: z.string(),
});

export type Testimonial = z.infer<typeof testimonialSchema>;

// Mongoose Schema
const TestimonialSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  name: { type: String, required: true },
  handle: { type: String, required: true },
  date: { type: String, required: true },
  testimonial: { type: String, required: true },
});

const TestimonialModel = mongoose.model<Testimonial>('Testimonial', TestimonialSchema);

export default TestimonialModel;
