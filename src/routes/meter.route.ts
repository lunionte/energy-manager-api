import { celebrate, Segments } from "celebrate";
import { Router } from "express";
import { newMeterSchema, updatedMeterSchema } from "../models/meter.model";
import { MeterController } from "../controllers/meters.controller";

export const meterRoute = Router();
meterRoute.post("/create", celebrate({ [Segments.BODY]: newMeterSchema }), MeterController.create);
meterRoute.patch(
    "/update/:id",
    celebrate({ [Segments.BODY]: updatedMeterSchema }),
    MeterController.update
);
