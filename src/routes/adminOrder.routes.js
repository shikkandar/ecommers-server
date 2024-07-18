import express from "express";
const router = express.Router();

import * as orderController from "../controller/adminOrder.controller.js";
import { authenticate } from "../middleware/authenticate.js";

router.get("/", authenticate, orderController.getAllOrders);
router.put(
  "/:orderId/confirmed",
  authenticate,
  orderController.confirmedOrders
);
router.put("/:orderId/ship", authenticate, orderController.shippOrders);
router.put("/:orderId/deliver", authenticate, orderController.deliiverOrders);
router.put("/:orderId/cancel", authenticate, orderController.cancelOrders);
router.put("/:orderId/delete", authenticate, orderController.deleteOrders);

export default router;
