"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.experienceSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const zod_1 = require("zod");
// Zod schema
exports.experienceSchema = zod_1.z.object({
    title: zod_1.z.string(),
    company: zod_1.z.string(),
    location: zod_1.z.string(),
    duration: zod_1.z.string(),
    description: zod_1.z.string(),
    responsibilities: zod_1.z.array(zod_1.z.string()),
});
// Mongoose Schema
const ExperienceSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    duration: { type: String, required: true },
    description: { type: String, required: true },
    responsibilities: { type: [String], required: true },
});
const ExperienceModel = mongoose_1.default.model('Experience', ExperienceSchema);
exports.default = ExperienceModel;
