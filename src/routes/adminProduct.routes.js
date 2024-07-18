import express from "express";
const router = express.Router();

import * as productController from "../controller/product.controller.js";
import { authenticate } from "../middleware/authenticate.js";

router.post("/", authenticate, productController.createProduct);
router.post("/create", authenticate, productController.createMulipleProducts);
router.delete("/:id", authenticate, productController.deleteProduct);
router.put("/:id", authenticate, productController.updateProduct);

export default router;
