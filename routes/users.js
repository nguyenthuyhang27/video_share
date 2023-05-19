import express from "express";
import { createUser, listUser } from "../controllers/user.js";

const router = express.Router();

router.post("/", createUser);
router.get("/", listUser);

export default router;
