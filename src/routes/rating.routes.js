import express from "express";
const router = express.Router();

import * as ratingController from "../controller/rating.controller.js";
import { authenticate } from "../middleware/authenticate.js";

router.post("/create", authenticate, ratingController.createRating);
router.get("/product/:productId", authenticate, ratingController.getAllRatings);

export default router;
