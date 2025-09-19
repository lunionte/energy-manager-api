import { Router } from "express";
import { ReadingController } from "../controllers/reading.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { celebrate, Segments } from "celebrate";
import { newReadingSchema } from "../models/readingModel";

export const readingRouter = Router();

readingRouter.post(
    "/create",
    authMiddleware,
    celebrate({ [Segments.BODY]: newReadingSchema }),
    ReadingController.create
);
