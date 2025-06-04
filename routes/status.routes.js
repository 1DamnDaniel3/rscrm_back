import express from 'express'

import { authMiddleware } from '../middleware/authMiddleware.js';
import { baseStatusController } from '../controllers/index.js'

const router = express.Router();

//CRUD
router.post('/statuses/registration', authMiddleware, (req, res) => baseStatusController.create(req, res));
router.post('/statuses/getAllWhere', authMiddleware,  (req, res) => baseStatusController.getAllWhere(req, res));
router.get('/statuses', authMiddleware,  (req, res) => baseStatusController.getAll(req, res));
router.get('/statuses/:id', authMiddleware, (req, res) => baseStatusController.getOne(req, res));
router.put('/statuses/:id', authMiddleware, (req, res) => baseStatusController.updateData(req, res));
router.delete('/statuses/:id', authMiddleware, (req, res) => baseStatusController.delete(req, res));

//ANOTHER ROUTES


export { router };
