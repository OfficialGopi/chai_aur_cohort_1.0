import express from "express"
import {loginUser, registerUser, verifyUser, profile} from "../controller/user.controller.js";
import { isLoggedIn } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", registerUser)

router.get('/verify/:token', verifyUser )
router.post('/login', loginUser)
router.get('/profile', isLoggedIn, profile)

export default router;