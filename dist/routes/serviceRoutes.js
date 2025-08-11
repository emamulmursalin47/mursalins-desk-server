"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const serviceController_1 = require("../controllers/serviceController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
router.route('/services').get(serviceController_1.getServices).post(authMiddleware_1.protect, serviceController_1.createService);
exports.default = router;
