import { Router } from 'express';
import { getServices, createService } from '../controllers/serviceController';
import { protect } from '../middleware/authMiddleware';

const router = Router();

router.route('/services').get(getServices).post(protect, createService);

export default router;
