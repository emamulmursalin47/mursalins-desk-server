import { Router } from 'express';
import { sendContactEmail } from '../controllers/contactController';

const router = Router();

router.post('/contact', sendContactEmail);

export default router;
