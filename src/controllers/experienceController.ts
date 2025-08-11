import { Request, Response } from 'express';
import ExperienceModel, { experienceSchema } from '../models/experienceModel';

export const getExperiences = async (req: Request, res: Response) => {
  try {
    const experiences = await ExperienceModel.find({});
    res.status(200).json(experiences);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const createExperience = async (req: Request, res: Response) => {
  try {
    const validatedData = experienceSchema.parse(req.body);
    const newExperience = await ExperienceModel.create(validatedData);
    res.status(201).json(newExperience);
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return res.status(400).json({ message: 'Validation Error', errors: error.errors });
    }
    res.status(500).json({ message: error.message });
  }
};
