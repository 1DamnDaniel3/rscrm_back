import express from 'express'

import { authMiddleware } from '../middleware/authMiddleware.js';
import { baseLeadController } from '../controllers/index.js'

const router = express.Router();

//CRUD
router.post('/leads/registration', authMiddleware, (req, res) => baseLeadController.create(req, res));
router.get('/leads', authMiddleware,  (req, res) => baseLeadController.getAll(req, res));
router.post('/leads/getAllWhere', authMiddleware,  (req, res) => baseLeadController.getAllWhere(req, res));
router.get('/leads/:id', authMiddleware, (req, res) => baseLeadController.getOne(req, res));
router.put('/leads/:id', authMiddleware, (req, res) => baseLeadController.updateData(req, res));
router.delete('/leads/:id', authMiddleware, (req, res) => baseLeadController.delete(req, res));

//ANOTHER ROUTES


export { router };
