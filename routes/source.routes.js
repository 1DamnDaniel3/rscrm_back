import express from 'express'

import { authMiddleware } from '../middleware/authMiddleware.js';
import { baseSourceController } from '../controllers/index.js'

const router = express.Router();

//CRUD
router.post('/sources/registration', authMiddleware, (req, res) => baseSourceController.create(req, res));
router.post('/sources/getAllWhere', authMiddleware,  (req, res) => baseSourceController.getAllWhere(req, res));
router.get('/sources', authMiddleware,  (req, res) => baseSourceController.getAll(req, res));
router.get('/sources/:id', authMiddleware, (req, res) => baseSourceController.getOne(req, res));
router.put('/sources/:id', authMiddleware, (req, res) => baseSourceController.updateData(req, res));
router.delete('/sources/:id', authMiddleware, (req, res) => baseSourceController.delete(req, res));

//ANOTHER ROUTES


export { router };
