import express from 'express'

import { authMiddleware } from '../middleware/authMiddleware.js';
import { baseAttendanceController } from '../controllers/index.js'

const router = express.Router();

//CRUD
router.post('/attendances/registration', authMiddleware, (req, res) => baseAttendanceController.create(req, res));
router.get('/attendances', authMiddleware,  (req, res) => baseAttendanceController.getAll(req, res));
router.post('/attendances/getAllWhere', authMiddleware,  (req, res) => baseAttendanceController.getAllWhere(req, res));
router.get('/attendances/:id', authMiddleware, (req, res) => baseAttendanceController.getOne(req, res));
router.put('/attendances/:id', authMiddleware, (req, res) => baseAttendanceController.updateData(req, res));
router.delete('/attendances/:id', authMiddleware, (req, res) => baseAttendanceController.delete(req, res));

//ANOTHER ROUTES


export { router };
