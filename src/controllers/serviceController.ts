import { Request, Response } from 'express';
import ServiceModel, { serviceSchema } from '../models/serviceModel';

export const getServices = async (req: Request, res: Response) => {
  try {
    const services = await ServiceModel.find({});
    res.status(200).json(services);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const createService = async (req: Request, res: Response) => {
  try {
    const validatedData = serviceSchema.parse(req.body);
    const newService = await ServiceModel.create(validatedData);
    res.status(201).json(newService);
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return res.status(400).json({ message: 'Validation Error', errors: error.errors });
    }
    res.status(500).json({ message: error.message });
  }
};
