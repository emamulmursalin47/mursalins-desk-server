import { Request, Response } from 'express';
import CertificationModel, { certificationSchema } from '../models/certificationModel';

export const getCertifications = async (req: Request, res: Response) => {
  try {
    const certifications = await CertificationModel.find({});
    res.status(200).json(certifications);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const createCertification = async (req: Request, res: Response) => {
  try {
    const validatedData = certificationSchema.parse(req.body);
    const newCertification = await CertificationModel.create(validatedData);
    console.log('Validated data for new certification:', validatedData);
    res.status(201).json(newCertification);
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return res.status(400).json({ message: 'Validation Error', errors: error.errors });
    }
    res.status(500).json({ message: error.message });
  }
};

export const getCertificationById = async (req: Request, res: Response) => {
  try {
    const certification = await CertificationModel.findById(req.params.id);
    if (!certification) {
      return res.status(404).json({ message: 'Certification not found' });
    }
    res.status(200).json(certification);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateCertification = async (req: Request, res: Response) => {
  try {
    const validatedData = certificationSchema.partial().parse(req.body);
    const updatedCertification = await CertificationModel.findByIdAndUpdate(
      req.params.id,
      validatedData,
      { new: true }
    );
    if (!updatedCertification) {
      return res.status(404).json({ message: 'Certification not found' });
    }
    res.status(200).json(updatedCertification);
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return res.status(400).json({ message: 'Validation Error', errors: error.errors });
    }
    res.status(500).json({ message: error.message });
  }
};

export const deleteCertification = async (req: Request, res: Response) => {
  try {
    const deletedCertification = await CertificationModel.findByIdAndDelete(req.params.id);
    if (!deletedCertification) {
      return res.status(404).json({ message: 'Certification not found' });
    }
    res.status(200).json({ message: 'Certification deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
