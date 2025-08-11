"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const zod_1 = require("zod");
// Zod schema
exports.serviceSchema = zod_1.z.object({
    id: zod_1.z.string(),
    category: zod_1.z.string(),
    title: zod_1.z.string(),
    details: zod_1.z.string(),
    subDetails: zod_1.z.array(zod_1.z.string()),
    imageSrc: zod_1.z.string(),
});
// Mongoose Schema
const ServiceSchema = new mongoose_1.default.Schema({
    id: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    title: { type: String, required: true },
    details: { type: String, required: true },
    subDetails: { type: [String], required: true },
    imageSrc: { type: String, required: true },
});
const ServiceModel = mongoose_1.default.model('Service', ServiceSchema);
exports.default = ServiceModel;
