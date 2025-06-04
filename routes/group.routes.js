import express from 'express'

import { authMiddleware } from '../middleware/authMiddleware.js';
import { baseGroupController } from '../controllers/index.js'

const router = express.Router();

//CRUD
router.post('/groups/registration', authMiddleware, (req, res) => baseGroupController.create(req, res));
router.post('/groups/getAllWhere', authMiddleware,  (req, res) => baseGroupController.getAllWhere(req, res));
router.get('/groups', authMiddleware,  (req, res) => baseGroupController.getAll(req, res));
router.get('/groups/:id', authMiddleware, (req, res) => baseGroupController.getOne(req, res));
router.put('/groups/:id', authMiddleware, (req, res) => baseGroupController.updateData(req, res));
router.delete('/groups/:id', authMiddleware, (req, res) => baseGroupController.delete(req, res));

//ANOTHER ROUTES


export { router };
