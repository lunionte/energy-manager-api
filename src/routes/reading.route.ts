import { Router } from "express";
import { ReadingController } from "../controllers/reading.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { celebrate, Segments } from "celebrate";
import { newReadingSchema, updateReadingSchema } from "../models/readingModel";
import expressAsyncHandler from "express-async-handler";

export const readingRouter = Router();

readingRouter.post(
    "/create",
    authMiddleware,
    celebrate({ [Segments.BODY]: newReadingSchema }),
    ReadingController.create
);

readingRouter.patch(
    "/update/:id",
    authMiddleware,
    celebrate({ [Segments.BODY]: updateReadingSchema }),
    expressAsyncHandler(ReadingController.update)
);
