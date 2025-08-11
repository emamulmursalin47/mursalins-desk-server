"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testimonialSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const zod_1 = require("zod");
// Zod schema
exports.testimonialSchema = zod_1.z.object({
    id: zod_1.z.string(),
    image: zod_1.z.string(),
    name: zod_1.z.string(),
    handle: zod_1.z.string(),
    date: zod_1.z.string(),
    testimonial: zod_1.z.string(),
});
// Mongoose Schema
const TestimonialSchema = new mongoose_1.default.Schema({
    id: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    name: { type: String, required: true },
    handle: { type: String, required: true },
    date: { type: String, required: true },
    testimonial: { type: String, required: true },
});
const TestimonialModel = mongoose_1.default.model('Testimonial', TestimonialSchema);
exports.default = TestimonialModel;
