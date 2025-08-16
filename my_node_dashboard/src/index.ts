import 'reflect-metadata';
import express, { Application } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config';

import announcementsRouter from './routes/announcements';
import quizzesRouter from './routes/quizzes';

const app: Application = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const uri = process.env.MONGO_URI!;
mongoose.connect(uri)
  .then(() => console.log("MongoDB connection established successfully"))
  .catch(err => console.error("MongoDB connection error:", err));

// API Routes
app.use('/announcements', announcementsRouter);
app.use('/quizzes', quizzesRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});