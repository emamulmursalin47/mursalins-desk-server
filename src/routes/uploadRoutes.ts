import { Router } from 'express';
import upload from '../config/multer';
import { uploadImage } from '../controllers/uploadController';
import { protect } from '../middleware/authMiddleware';

const router = Router();

router.post('/upload', protect, upload.single('image'), uploadImage);

export default router;