"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const zod_1 = require("zod");
// Zod schema (kept for potential validation use cases)
exports.projectSchema = zod_1.z.object({
    _id: zod_1.z.string().optional(),
    id: zod_1.z.string(), // Re-added id to Zod schema
    title: zod_1.z.string(),
    description: zod_1.z.string(),
    technologies: zod_1.z.array(zod_1.z.string()),
    techColors: zod_1.z.array(zod_1.z.string()),
    imageUrl: zod_1.z.string().url(),
    projectUrl: zod_1.z.string().url(),
    githubUrl: zod_1.z.string().url(),
    features: zod_1.z.array(zod_1.z.string()),
    challenges: zod_1.z.string(),
    learnings: zod_1.z.string(),
});
// Mongoose Schema
const ProjectSchema = new mongoose_1.default.Schema({
    id: { type: String, required: true, unique: true }, // Re-added id to Mongoose schema
    title: { type: String, required: true },
    description: { type: String, required: true },
    technologies: { type: [String], required: true },
    techColors: { type: [String], required: true },
    imageUrl: { type: String, required: true },
    projectUrl: { type: String, required: true },
    githubUrl: { type: String, required: true },
    features: { type: [String], required: true },
    challenges: { type: String, required: true },
    learnings: { type: String, required: true },
});
const ProjectModel = mongoose_1.default.model('Project', ProjectSchema);
exports.default = ProjectModel;
