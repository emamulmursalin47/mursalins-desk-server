import { Request, Response } from 'express';
import SkillModel, { skillSchema } from '../models/skillModel';

export const getSkills = async (req: Request, res: Response) => {
  try {
    const skills = await SkillModel.find({});
    res.status(200).json(skills);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const createSkill = async (req: Request, res: Response) => {
  try {
    const validatedData = skillSchema.parse(req.body);
    const newSkill = await SkillModel.create(validatedData);
    res.status(201).json(newSkill);
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return res.status(400).json({ message: 'Validation Error', errors: error.errors });
    }
    res.status(500).json({ message: error.message });
  }
};

export const getSkillById = async (req: Request, res: Response) => {
  try {
    const skill = await SkillModel.findById(req.params.id);
    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    res.status(200).json(skill);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateSkill = async (req: Request, res: Response) => {
  try {
    const validatedData = skillSchema.partial().parse(req.body);
    const updatedSkill = await SkillModel.findByIdAndUpdate(
      req.params.id,
      validatedData,
      { new: true }
    );
    if (!updatedSkill) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    res.status(200).json(updatedSkill);
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return res.status(400).json({ message: 'Validation Error', errors: error.errors });
    }
    res.status(500).json({ message: error.message });
  }
};

export const deleteSkill = async (req: Request, res: Response) => {
  try {
    const deletedSkill = await SkillModel.findByIdAndDelete(req.params.id);
    if (!deletedSkill) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    res.status(200).json({ message: 'Skill deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
