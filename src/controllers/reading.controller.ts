import { Request, Response } from "express";
import { ReadingService } from "../services/reading.service";

export class ReadingController {
    static async create(req: Request, res: Response) {
        const { medidorId, consumoKwh } = req.body;
        const tecnicoId = req.user.id;
        const data = await new ReadingService().create(tecnicoId, medidorId, consumoKwh);
        res.json({ data });
    }

    static async update(req: Request, res: Response) {
        const { id } = req.params;
        const { consumoKwh, medidorId } = req.body;
        const tecnicoId = req.user.id;

        const data = await new ReadingService().update(id, medidorId, tecnicoId, consumoKwh);
        res.json(data);
    }
}
