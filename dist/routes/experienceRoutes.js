"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const experienceController_1 = require("../controllers/experienceController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
router.route('/experiences').get(experienceController_1.getExperiences).post(authMiddleware_1.protect, experienceController_1.createExperience);
exports.default = router;
