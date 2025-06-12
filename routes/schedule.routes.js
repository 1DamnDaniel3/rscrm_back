import express from 'express'

import { authMiddleware } from '../middleware/authMiddleware.js';
import { baseScheduleController } from '../controllers/index.js'

const router = express.Router();

//CRUD
router.post('/schedules/registration', authMiddleware, (req, res) => baseScheduleController.create(req, res));
router.get('/schedules', authMiddleware,  (req, res) => baseScheduleController.getAll(req, res));
router.post('/schedules/getAllWhere', authMiddleware,  (req, res) => baseScheduleController.getAllWhere(req, res));
router.get('/schedules/:id', authMiddleware, (req, res) => baseScheduleController.getOne(req, res));
router.put('/schedules/:id', authMiddleware, (req, res) => baseScheduleController.updateData(req, res));
router.delete('/schedules/:id', authMiddleware, (req, res) => baseScheduleController.delete(req, res));

//ANOTHER ROUTES


export { router };
