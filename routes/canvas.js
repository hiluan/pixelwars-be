import express from "express";
import { getCanvas, updatePixel } from "../controllers/canvas.js";
const router = express.Router();
router.get("/canvas", getCanvas);
router.put("/canvas/:id", updatePixel);

export default router;
