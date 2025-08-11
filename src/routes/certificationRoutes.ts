import { Router } from 'express';
import { getCertifications, createCertification, getCertificationById, updateCertification, deleteCertification } from '../controllers/certificationController';
import { protect } from '../middleware/authMiddleware';

const router = Router();

router.route('/certifications').get(getCertifications).post(protect, createCertification);
router.route('/certifications/:id').get(getCertificationById).put(protect, updateCertification).delete(protect, deleteCertification);

export default router;
