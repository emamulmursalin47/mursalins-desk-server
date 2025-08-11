import mongoose from 'mongoose';
import { z } from 'zod';

// Zod schema
export const certificationSchema = z.object({
  title: z.string(),
  issuer: z.string(),
  date: z.string(),
  description: z.string(),
  iconName: z.string(),
  certificationId: z.string(),
});

export type Certification = z.infer<typeof certificationSchema>;

// Mongoose Schema
const CertificationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  issuer: { type: String, required: true },
  date: { type: String, required: true },
  description: { type: String, required: true },
  iconName: { type: String, required: true },
  certificationId: { type: String, required: true },
});

const CertificationModel = mongoose.model<Certification>('Certification', CertificationSchema);

export default CertificationModel;
