import { Request, Response } from 'express';
import ProjectModel, { projectSchema } from '../models/projectModel';

export const getProjects = async (req: Request, res: Response) => {
  try {
    const projects = await ProjectModel.find({});
    res.status(200).json(projects);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const createProject = async (req: Request, res: Response) => {
  try {
    const validatedData = projectSchema.parse(req.body);
    const newProject = await ProjectModel.create(validatedData);
    res.status(201).json(newProject);
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return res.status(400).json({ message: 'Validation Error', errors: error.errors });
    }
    res.status(500).json({ message: error.message });
  }
};

export const getProjectById = async (req: Request, res: Response) => {
  try {
    const project = await ProjectModel.findOne({ id: req.params.id }); // Changed to find by custom 'id'
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.status(200).json(project);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProject = async (req: Request, res: Response) => {
  try {
    const validatedData = projectSchema.partial().parse(req.body);
    const updatedProject = await ProjectModel.findOneAndUpdate(
      { id: req.params.id }, // Changed to find by custom 'id'
      validatedData,
      { new: true }
    );
    if (!updatedProject) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.status(200).json(updatedProject);
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return res.status(400).json({ message: 'Validation Error', errors: error.errors });
    }
    res.status(500).json({ message: error.message });
  }
};

export const deleteProject = async (req: Request, res: Response) => {
  try {
    const deletedProject = await ProjectModel.findOneAndDelete({ id: req.params.id }); // Changed to find by custom 'id'
    if (!deletedProject) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};