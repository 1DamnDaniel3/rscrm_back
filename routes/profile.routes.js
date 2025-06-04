import express from 'express'

import { authMiddleware } from '../middleware/authMiddleware.js';
import { profileController } from '../controllers/index.js'

const router = express.Router();

//CRUD
router.post('/user_profiles/registration', authMiddleware, (req, res) => profileController.create(req, res));
router.post('/user_profiles/getAllWhere', authMiddleware,  (req, res) => profileController.getAllWhere(req, res));
router.get('/user_profiles', authMiddleware,  (req, res) => profileController.getAll(req, res));
router.get('/user_profiles/:id', authMiddleware, (req, res) => profileController.getOne(req, res));
router.put('/user_profiles/:id', authMiddleware, (req, res) => profileController.updateData(req, res));
router.delete('/user_profiles/:id', authMiddleware, (req, res) => profileController.delete(req, res));

//ANOTHER ROUTES


export { router };
