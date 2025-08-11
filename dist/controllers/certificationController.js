"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCertification = exports.updateCertification = exports.getCertificationById = exports.createCertification = exports.getCertifications = void 0;
const certificationModel_1 = __importStar(require("../models/certificationModel"));
const getCertifications = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const certifications = yield certificationModel_1.default.find({});
        res.status(200).json(certifications);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getCertifications = getCertifications;
const createCertification = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const validatedData = certificationModel_1.certificationSchema.parse(req.body);
        const newCertification = yield certificationModel_1.default.create(validatedData);
        console.log('Validated data for new certification:', validatedData);
        res.status(201).json(newCertification);
    }
    catch (error) {
        if (error.name === 'ZodError') {
            return res.status(400).json({ message: 'Validation Error', errors: error.errors });
        }
        res.status(500).json({ message: error.message });
    }
});
exports.createCertification = createCertification;
const getCertificationById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const certification = yield certificationModel_1.default.findById(req.params.id);
        if (!certification) {
            return res.status(404).json({ message: 'Certification not found' });
        }
        res.status(200).json(certification);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getCertificationById = getCertificationById;
const updateCertification = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const validatedData = certificationModel_1.certificationSchema.partial().parse(req.body);
        const updatedCertification = yield certificationModel_1.default.findByIdAndUpdate(req.params.id, validatedData, { new: true });
        if (!updatedCertification) {
            return res.status(404).json({ message: 'Certification not found' });
        }
        res.status(200).json(updatedCertification);
    }
    catch (error) {
        if (error.name === 'ZodError') {
            return res.status(400).json({ message: 'Validation Error', errors: error.errors });
        }
        res.status(500).json({ message: error.message });
    }
});
exports.updateCertification = updateCertification;
const deleteCertification = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedCertification = yield certificationModel_1.default.findByIdAndDelete(req.params.id);
        if (!deletedCertification) {
            return res.status(404).json({ message: 'Certification not found' });
        }
        res.status(200).json({ message: 'Certification deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.deleteCertification = deleteCertification;
