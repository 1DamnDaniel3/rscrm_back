import express from 'express'

import { authMiddleware } from '../middleware/authMiddleware.js';
import { baseStylesController } from '../controllers/index.js'

const router = express.Router();

//CRUD
router.post('/styles/registration', authMiddleware, (req, res) => baseStylesController.create(req, res));
router.get('/styles', authMiddleware, (req, res) => baseStylesController.getAll(req, res));
router.post('/styles/getAllWhere', authMiddleware, (req, res) => baseStylesController.getAllWhere(req, res));
router.get('/styles/:id', authMiddleware, (req, res) => baseStylesController.getOne(req, res));
router.put('/styles/:id', authMiddleware, (req, res) => baseStylesController.updateData(req, res));
router.delete('/styles/:id', authMiddleware, (req, res) => baseStylesController.delete(req, res));

//ANOTHER ROUTES


export { router };
