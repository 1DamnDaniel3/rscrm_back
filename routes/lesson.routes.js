import express from 'express'

import { authMiddleware } from '../middleware/authMiddleware.js';
import { baseLessonController, generateLessonsController } from '../controllers/index.js'

const router = express.Router();

//CRUD
router.post('/lessons/registration', authMiddleware, (req, res) => baseLessonController.create(req, res));
router.get('/lessons', authMiddleware,  (req, res) => baseLessonController.getAll(req, res));
router.post('/lessons/getAllWhere', authMiddleware,  (req, res) => baseLessonController.getAllWhere(req, res));
router.get('/lessons/:id', authMiddleware, (req, res) => baseLessonController.getOne(req, res));
router.put('/lessons/:id', authMiddleware, (req, res) => baseLessonController.updateData(req, res));
router.delete('/lessons/:id', authMiddleware, (req, res) => baseLessonController.delete(req, res));

//ANOTHER ROUTES
router.post('/lessons/generate', authMiddleware, (req, res) => generateLessonsController.generateLessons(req, res));


export { router };
