import express from 'express'

import { authMiddleware } from '../middleware/authMiddleware.js';
import { baseSchoolController } from '../controllers/index.js'

const router = express.Router();

//CRUD
router.post('/schools/registration', authMiddleware, (req, res) => baseSchoolController.create(req, res));
router.get('/schools', authMiddleware,  (req, res) => baseSchoolController.getAll(req, res));
router.get('/schools/:id', authMiddleware, (req, res) => baseSchoolController.getOne(req, res));
router.put('/schools/:id', authMiddleware, (req, res) => baseSchoolController.updateData(req, res));
router.delete('/schools/:id', authMiddleware, (req, res) => baseSchoolController.delete(req, res));

//ANOTHER ROUTES


export { router };
