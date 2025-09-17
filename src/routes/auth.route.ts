import { celebrate, Segments } from "celebrate";
import { Router } from "express";
import { newUserSchema } from "../models/user.model";
import { AuthController } from "../controllers/auth.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

export const authRoute = Router();

authRoute.post(
    "/register",
    authMiddleware,
    celebrate({ [Segments.BODY]: newUserSchema }),
    AuthController.register
);

authRoute.post("/login", celebrate({ [Segments.BODY]: newUserSchema }), AuthController.login);
