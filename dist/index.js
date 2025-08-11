"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
console.log("Server initialization started...");
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
const projectRoutes_1 = __importDefault(require("./routes/projectRoutes"));
const skillRoutes_1 = __importDefault(require("./routes/skillRoutes"));
const uploadRoutes_1 = __importDefault(require("./routes/uploadRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const contactRoutes_1 = __importDefault(require("./routes/contactRoutes"));
const experienceRoutes_1 = __importDefault(require("./routes/experienceRoutes"));
const certificationRoutes_1 = __importDefault(require("./routes/certificationRoutes"));
const serviceRoutes_1 = __importDefault(require("./routes/serviceRoutes"));
const testimonialRoutes_1 = __importDefault(require("./routes/testimonialRoutes")); // Import testimonial routes
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
(0, db_1.default)();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// JSON parsing error handler
app.use((err, req, res, next) => {
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
app.use('/api', projectRoutes_1.default);
app.use('/api', skillRoutes_1.default);
app.use('/api', uploadRoutes_1.default);
app.use('/api/auth', authRoutes_1.default);
app.use('/api', contactRoutes_1.default);
app.use('/api', experienceRoutes_1.default);
app.use('/api', certificationRoutes_1.default);
app.use('/api', serviceRoutes_1.default);
app.use('/api', testimonialRoutes_1.default); // Use testimonial routes
// Global error handler
app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);
    res.status(500).send('Something broke!');
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
