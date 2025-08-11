import express from 'express';

console.log("Server initialization started...");
import dotenv from 'dotenv';
import connectDB from './config/db';
import projectRoutes from './routes/projectRoutes';
import skillRoutes from './routes/skillRoutes';
import uploadRoutes from './routes/uploadRoutes';
import authRoutes from './routes/authRoutes';
import contactRoutes from './routes/contactRoutes';
import experienceRoutes from './routes/experienceRoutes';
import certificationRoutes from './routes/certificationRoutes';
import serviceRoutes from './routes/serviceRoutes';
import testimonialRoutes from './routes/testimonialRoutes'; // Import testimonial routes
import cors from 'cors';

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use(cors());

// JSON parsing error handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (err instanceof SyntaxError && 'body' in err) {
    console.error('Bad JSON syntax:', err.message);
    return res.status(400).send({ message: 'Bad JSON syntax' }); // Send a more specific error
  }
  next();
});

// Log req.body to see if it's parsed correctly
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  if (req.method === 'POST' || req.method === 'PUT') {
    console.log('Request Body:', req.body);
  }
  next();
});

app.get('/', (req, res) => {
  res.send('Hello from Express server!');
});

// --- TEST ROUTE --- 
app.get('/test', (req, res) => {
  res.send('Test route works!');
});
// --- END TEST ROUTE ---

app.use('/api', projectRoutes);
app.use('/api', skillRoutes);
app.use('/api', uploadRoutes);
app.use('/api/auth', authRoutes);
app.use('/api', contactRoutes);
app.use('/api', experienceRoutes);
app.use('/api', certificationRoutes);
app.use('/api', serviceRoutes);
app.use('/api', testimonialRoutes); // Use testimonial routes

// Global error handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Unhandled error:', err);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
