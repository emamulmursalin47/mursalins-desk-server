"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.certificationSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const zod_1 = require("zod");
// Zod schema
exports.certificationSchema = zod_1.z.object({
    title: zod_1.z.string(),
    issuer: zod_1.z.string(),
    date: zod_1.z.string(),
    description: zod_1.z.string(),
    iconName: zod_1.z.string(),
    certificationId: zod_1.z.string(),
});
// Mongoose Schema
const CertificationSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    issuer: { type: String, required: true },
    date: { type: String, required: true },
    description: { type: String, required: true },
    iconName: { type: String, required: true },
    certificationId: { type: String, required: true },
});
const CertificationModel = mongoose_1.default.model('Certification', CertificationSchema);
exports.default = CertificationModel;
