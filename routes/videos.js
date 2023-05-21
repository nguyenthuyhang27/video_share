import express from "express";
import { get, update, create, deleteVideo } from "../controllers/video.js";

const router = express.Router();

router.get("/", get);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", deleteVideo);

export default router;
