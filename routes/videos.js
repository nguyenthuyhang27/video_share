import express from "express";
import { get, update } from "../controllers/video.js";

const router = express.Router();

router.get("/", get);
router.post("/", update);

export default router;
