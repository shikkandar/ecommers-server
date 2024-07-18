import express from "express";
const router = express.Router();

import * as cartController from "../controller/cart.controller.js";
import { authenticate } from "../middleware/authenticate.js";

router.get("/",authenticate,cartController.findUserCart)
router.put("/add",authenticate,cartController.addItemToCart);

export default router;