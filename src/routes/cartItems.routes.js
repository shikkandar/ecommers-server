import express from "express";
const router = express.Router();

import * as cartItmesController from "../controller/cartItem.controller.js";
import { authenticate } from "../middleware/authenticate.js";

router.put("/:id", authenticate, cartItmesController.updateCartItem);
router.delete("/:id", authenticate, cartItmesController.removeCartItem);

export default router;
