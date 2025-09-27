import express from "express";
import { getCafes } from "../controllers/cafeController.js";

const router = express.Router();

router.get("/", getCafes);

export default router;