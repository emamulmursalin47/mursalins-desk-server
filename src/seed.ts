import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import connectDB from './config/db';
import ProjectModel from './models/projectModel';
import SkillModel from './models/skillModel';
import ExperienceModel from './models/experienceModel';
import CertificationModel from './models/certificationModel';
import ServiceModel from './models/serviceModel';
import TestimonialModel from './models/testimonialModel';
import { projectsData } from './utils/initialProjectsData';
import { skills } from './utils/initialSkillsData';
import { experiences } from './utils/initialExperienceData';
import { certifications } from './utils/initialCertificationsData';
import { services } from './utils/initialServiceData';
import { testimonials } from './utils/initialTestimonialData';

connectDB();

const importData = async () => {
  try {
    await ProjectModel.deleteMany({});
    await SkillModel.deleteMany({});
    await ExperienceModel.deleteMany({});
    await CertificationModel.deleteMany({});
    await ServiceModel.deleteMany({});
    await TestimonialModel.deleteMany({});

    await ProjectModel.insertMany(projectsData);
    await SkillModel.insertMany(skills);
    await ExperienceModel.insertMany(experiences);
    await CertificationModel.insertMany(certifications);
    await ServiceModel.insertMany(services);
    await TestimonialModel.insertMany(testimonials);

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

importData();
