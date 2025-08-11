import { Router } from 'express';
import { getTestimonials, createTestimonial } from '../controllers/testimonialController';
import { protect } from '../middleware/authMiddleware';

const router = Router();

router.route('/testimonials').get(getTestimonials).post(protect, createTestimonial);

export default router;
