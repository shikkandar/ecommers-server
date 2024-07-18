import express from 'express'
import * as authController from '../controller/auth.controler.js'

const router=express.Router();

router.post("/signup",authController.register)
router.post("/signin",authController.login)

export default router;