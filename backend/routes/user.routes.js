import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSidebar } from "../controllers/user.controller.js"

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar) //protectRoute is middleware used to restrick unathenticate user to call this function

export default router;
