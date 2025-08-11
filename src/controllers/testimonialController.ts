import { Request, Response } from 'express';
import TestimonialModel, { testimonialSchema } from '../models/testimonialModel';

export const getTestimonials = async (req: Request, res: Response) => {
  try {
    const testimonials = await TestimonialModel.find({});
    res.status(200).json(testimonials);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const createTestimonial = async (req: Request, res: Response) => {
  try {
    const validatedData = testimonialSchema.parse(req.body);
    const newTestimonial = await TestimonialModel.create(validatedData);
    res.status(201).json(newTestimonial);
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return res.status(400).json({ message: 'Validation Error', errors: error.errors });
    }
    res.status(500).json({ message: error.message });
  }
};
