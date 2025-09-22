import { Request, Response } from "express";
import { MetersService } from "../services/meters.service";

export class MeterController {
    static async create(req: Request, res: Response) {
        const { serial, location, status } = req.body;
        const data = await new MetersService().create(serial, location, status);

        res.status(201).json({ data, message: "Medidor criado com sucesso!" });
    }

    static async update(req: Request, res: Response) {
        const { id } = req.params;
        const { serial, location, status } = req.body;
        const data = await new MetersService().update(id, serial, location, status);
        res.json(data);
    }
}
