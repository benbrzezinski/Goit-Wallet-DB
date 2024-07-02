import express from "express";
import usersController from "../controllers/users.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", usersController.register);

router.post("/login", usersController.login);

router.post("/logout", auth, usersController.logout);

router.post("/reverify", usersController.reverifyEmail);

router.get("/verify/:verificationToken", usersController.verifyEmail);

router.get("/current", auth, usersController.getCurrent);

export default router;
