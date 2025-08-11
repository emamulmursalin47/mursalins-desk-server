"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const testimonialController_1 = require("../controllers/testimonialController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
router.route('/testimonials').get(testimonialController_1.getTestimonials).post(authMiddleware_1.protect, testimonialController_1.createTestimonial);
exports.default = router;
