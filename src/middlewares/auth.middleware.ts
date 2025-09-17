import { NextFunction, Request, Response } from "express";
import { ValidationError } from "../errors/validation.error";
import jwt, { JwtPayload } from "jsonwebtoken";
import { UserService } from "../services/user.service";

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split("Bearer ")[1];
    if (!token) {
        throw new ValidationError("Token não fornecido");
    }

    try {
        // payload contendo apenas id e role
        const payload = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
        const userData = await new UserService().getById(payload.id);
        req.user = {
            id: userData.id,
            email: userData.email,
            role: userData.role,
        };
    } catch (error) {
        console.log(error);
    }
    next();
};
