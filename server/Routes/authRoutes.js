import express from "express";
import {
  loginController,
  registerController,
  getmeController,
} from "../Controllers/authController.js";

const router = express.Router();

router.post("/register", registerController);

router.post("/login", loginController);

router.post("/getme", getmeController);

export default router;
