import { Router } from 'express';
import { getSkills, createSkill } from '../controllers/skillController';
import { protect } from '../middleware/authMiddleware';

const router = Router();

router.route('/skills').get(getSkills).post(protect, createSkill);

export default router;