import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

const router = express.Router();


router.get("/", (req, res) => {
    res.send("Hello Home page")
})
router.post("/signup",signup)
router.post("/login", login)
router.post("/logout", logout )

export default router;
