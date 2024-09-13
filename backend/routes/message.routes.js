import express from "express";
import { sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";
const router = express.Router();

router.post("/send/:id", protectRoute, sendMessage);//before run sendMessage we check user is login or not

export default router;