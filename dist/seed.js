"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const db_1 = __importDefault(require("./config/db"));
const projectModel_1 = __importDefault(require("./models/projectModel"));
const skillModel_1 = __importDefault(require("./models/skillModel"));
const experienceModel_1 = __importDefault(require("./models/experienceModel"));
const certificationModel_1 = __importDefault(require("./models/certificationModel"));
const serviceModel_1 = __importDefault(require("./models/serviceModel"));
const testimonialModel_1 = __importDefault(require("./models/testimonialModel"));
const initialProjectsData_1 = require("./utils/initialProjectsData");
const initialSkillsData_1 = require("./utils/initialSkillsData");
const initialExperienceData_1 = require("./utils/initialExperienceData");
const initialCertificationsData_1 = require("./utils/initialCertificationsData");
const initialServiceData_1 = require("./utils/initialServiceData");
const initialTestimonialData_1 = require("./utils/initialTestimonialData");
(0, db_1.default)();
const importData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield projectModel_1.default.deleteMany({});
        yield skillModel_1.default.deleteMany({});
        yield experienceModel_1.default.deleteMany({});
        yield certificationModel_1.default.deleteMany({});
        yield serviceModel_1.default.deleteMany({});
        yield testimonialModel_1.default.deleteMany({});
        yield projectModel_1.default.insertMany(initialProjectsData_1.projectsData);
        yield skillModel_1.default.insertMany(initialSkillsData_1.skills);
        yield experienceModel_1.default.insertMany(initialExperienceData_1.experiences);
        yield certificationModel_1.default.insertMany(initialCertificationsData_1.certifications);
        yield serviceModel_1.default.insertMany(initialServiceData_1.services);
        yield testimonialModel_1.default.insertMany(initialTestimonialData_1.testimonials);
        console.log('Data Imported!');
        process.exit();
    }
    catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
});
importData();
