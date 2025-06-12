import express from 'express'

import { authMiddleware } from '../middleware/authMiddleware.js';
import { baseClientController } from '../controllers/index.js'

const router = express.Router();

//CRUD
router.post('/clients/registration', authMiddleware, (req, res) => baseClientController.create(req, res));
router.get('/clients', authMiddleware, (req, res) => baseClientController.getAll(req, res));
router.post('/clients/getAllWhere', authMiddleware, (req, res) => baseClientController.getAllWhere(req, res));
router.get('/clients/:id', authMiddleware, (req, res) => baseClientController.getOne(req, res));
router.put('/clients/:id', authMiddleware, (req, res) => baseClientController.updateData(req, res));
router.delete('/clients/:id', authMiddleware, (req, res) => baseClientController.delete(req, res));

//ANOTHER ROUTES


export { router };
