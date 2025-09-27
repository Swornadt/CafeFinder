import express from "express";
import { geocodeLocation } from "../controllers/geocodeController.js";

const router = express.Router();

router.get("/", geocodeLocation);

export default router;