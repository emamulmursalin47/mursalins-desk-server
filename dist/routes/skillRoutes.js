"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const skillController_1 = require("../controllers/skillController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
router.route('/skills').get(skillController_1.getSkills).post(authMiddleware_1.protect, skillController_1.createSkill);
exports.default = router;
