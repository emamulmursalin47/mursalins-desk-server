import { Router } from 'express';
import { getProjects, createProject, getProjectById, updateProject, deleteProject } from '../controllers/projectController';
import { protect } from '../middleware/authMiddleware';

const router = Router();

router.route('/projects').get(getProjects).post(protect, createProject);
router.route('/projects/:id').get(getProjectById).put(protect, updateProject).delete(protect, deleteProject);

export default router;
