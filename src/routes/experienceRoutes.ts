import { Router } from 'express';
import { getExperiences, createExperience } from '../controllers/experienceController';
import { protect } from '../middleware/authMiddleware';

const router = Router();

router.route('/experiences').get(getExperiences).post(protect, createExperience);

export default router;
