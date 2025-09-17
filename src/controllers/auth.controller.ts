import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";

export class AuthController {
    static async register(req: Request, res: Response) {
        const { email, password } = req.body;
        const data = await new AuthService().register(email, password);

        res.status(201).json(data);
    }

    static async login(req: Request, res: Response) {
        const { email, password } = req.body;
        const data = await new AuthService().login(email, password);

        res.json({ data });
    }
}
