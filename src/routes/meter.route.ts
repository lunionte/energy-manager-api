import { celebrate, Segments } from "celebrate";
import { Router } from "express";
import { newMeterSchema } from "../models/meter.model";
import { MeterController } from "../controllers/meters.controller";

export const meterRoute = Router();
meterRoute.post("/", celebrate({ [Segments.BODY]: newMeterSchema }), MeterController.createMeter);
