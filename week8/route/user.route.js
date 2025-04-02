import express from "express"
import {loginUser, registerUser, verifyUser, getme, logoutUser} from "../controller/user.controller.js";
import { isLoggedIn } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", registerUser)

router.get('/verify/:token', verifyUser )
router.post('/login', loginUser)
// router.use(isLoggedIn)
router.get('/me', isLoggedIn, getme)
router.get('/logout', isLoggedIn, logoutUser)

export default router;