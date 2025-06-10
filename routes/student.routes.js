import express from 'express'

import { authMiddleware } from '../middleware/authMiddleware.js';
import { baseStudentController } from '../controllers/index.js'

const router = express.Router();

//CRUD
router.post('/students/registration', authMiddleware, (req, res) => baseStudentController.create(req, res));
router.get('/students', authMiddleware, (req, res) => baseStudentController.getAll(req, res));
router.post('/students/getAllWhere', authMiddleware, (req, res) => baseStudentController.getAllWhere(req, res));
router.get('/students/:id', authMiddleware, (req, res) => baseStudentController.getOne(req, res));
router.put('/students/:id', authMiddleware, (req, res) => baseStudentController.updateData(req, res));
router.delete('/students/:id', authMiddleware, (req, res) => baseStudentController.delete(req, res));

//ANOTHER ROUTES

router.post('/students/getAllStudInfo', authMiddleware, (req, res) => baseStudentController.getAllStudInfo(req, res));

export { router };
