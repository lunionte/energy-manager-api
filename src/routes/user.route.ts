import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

export const userRoute = Router();

userRoute.get("/all", authMiddleware, UserController.getAll);
