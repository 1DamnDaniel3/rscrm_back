import express from 'express'

import { authMiddleware } from '../middleware/authMiddleware.js';
import { baseUserController, profileController } from '../controllers/index.js'
import { loginController } from '../controllers/index.js'

const router = express.Router();

//CRUD
router.post('/users/registration', authMiddleware, (req, res) => baseUserController.create(req, res));
router.post('/users/getAllWhere', authMiddleware,  (req, res) => baseUserController.getAllWhere(req, res));
router.get('/users', authMiddleware,  (req, res) => baseUserController.getAll(req, res));
router.get('/users/:id', authMiddleware, (req, res) => baseUserController.getOne(req, res));
router.put('/users/:id', authMiddleware, (req, res) => baseUserController.updateData(req, res));
router.delete('/users/:id', authMiddleware, (req, res) => baseUserController.delete(req, res));

//ANOTHER ROUTES

router.post('/users/registration/school', (req, res) => baseUserController.createSchool(req, res)); //admin & school reg

router.post('/users/login', (req, res) => loginController.userLogin(req, res));// login
router.post('/users/logout', (req, res) => loginController.userLogout(req, res));// logout
router.post('/users/getUserProfilesWhere', (req, res) => profileController.getAllWhere(req, res));// getUserProfiles
router.post('/users/getWithRole', (req, res) => baseUserController.getUserInfo(req, res)); // get users with school_id and role


export { router };
