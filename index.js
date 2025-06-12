import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();



import {
  authRouter, userRouter, profileRouter,
  schoolRouter, leadsRouter, sourcesRouter,
  statusesRouter, groupsRouter, studentsRouter,
  clientsRouter, lessonsRouter, schedulesRouter
} from './routes/index.js';

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());


app.use('/api/auth', authRouter);
app.use('/api', userRouter);
app.use('/api', profileRouter);
app.use('/api', schoolRouter);
app.use('/api', leadsRouter);
app.use('/api', sourcesRouter);
app.use('/api', statusesRouter);
app.use('/api', groupsRouter);
app.use('/api', studentsRouter);
app.use('/api', clientsRouter);
app.use('/api', lessonsRouter);
app.use('/api', schedulesRouter);



app.listen(PORT, () => console.log(`server startet on post${PORT}`));