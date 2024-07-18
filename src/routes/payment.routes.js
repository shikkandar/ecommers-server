import express from "express";
const router = express.Router();
import { authenticate } from "../middleware/authenticate.js";
import * as paymentController from "../controller/payment.controler.js";

router.post("/",authenticate,paymentController.createPaymentLink);
router.get("/",authenticate,paymentController.updatePaymentInformation);

export default router;
