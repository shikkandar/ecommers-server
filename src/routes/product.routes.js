import express from "express";
const router = express.Router();

import * as productController from "../controller/product.controller.js";
import { authenticate } from "../middleware/authenticate.js";

router.get("/", productController.getAllProducts);
router.get("/id/:id", productController.findProductById);

export default router;
