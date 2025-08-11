"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const certificationController_1 = require("../controllers/certificationController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
router.route('/certifications').get(certificationController_1.getCertifications).post(authMiddleware_1.protect, certificationController_1.createCertification);
router.route('/certifications/:id').get(certificationController_1.getCertificationById).put(authMiddleware_1.protect, certificationController_1.updateCertification).delete(authMiddleware_1.protect, certificationController_1.deleteCertification);
exports.default = router;
