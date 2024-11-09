import express from "express";
import userController from "./userController";
import authMiddleware from "../middlewares/authMiddleware";
import userRoleMiddleware from "../middlewares/userRoleMiddleware";

const router = express.Router();

router.get("/login", userController.getLoginPage);
router.post("/login", userController.authLogin);
router.get("/registration", userController.getRegistrationPage);
router.post("/registration", userController.authRegistration);


export default router;
