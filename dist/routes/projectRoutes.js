"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const projectController_1 = require("../controllers/projectController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
router.route('/projects').get(projectController_1.getProjects).post(authMiddleware_1.protect, projectController_1.createProject);
router.route('/projects/:id').get(projectController_1.getProjectById).put(authMiddleware_1.protect, projectController_1.updateProject).delete(authMiddleware_1.protect, projectController_1.deleteProject);
exports.default = router;
