import express from 'express';
import * as userController from '../controller/user.controller.js';

const router = express.Router();

router.get("/profile", userController.getUserProfile);
router.get("/", userController.getAllUser);

export default router;
