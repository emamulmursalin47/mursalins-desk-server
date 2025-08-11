"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.skillSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const zod_1 = require("zod");
// Zod schema
exports.skillSchema = zod_1.z.object({
    title: zod_1.z.string(),
    description: zod_1.z.string(),
    image: zod_1.z.string(),
    category: zod_1.z.string(),
});
// Mongoose Schema
const SkillSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
});
const SkillModel = mongoose_1.default.model('Skill', SkillSchema);
exports.default = SkillModel;
