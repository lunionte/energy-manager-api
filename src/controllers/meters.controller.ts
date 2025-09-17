import { Request, Response } from "express";
import { MetersService } from "../services/meters.service";

export class MeterController {
    static async createMeter(req: Request, res: Response) {
        const { serial, location, status } = req.body;
        const data = await new MetersService().createMeter(serial, location, status);

        res.status(201).json({ data, message: "Medidor criado com sucesso!" });
    }
}
