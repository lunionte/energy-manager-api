import { NextFunction, Request, Response } from "express";
import { ErrorBase } from "../errors/base.error";
import { PrismaClientUnknownRequestError } from "@prisma/client/runtime/library";
import { EmailAlreadyExists } from "../errors/email-already-exists.error";
import { InternalServerError } from "../errors/internal-server.error";

export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(error);
    if (error instanceof ErrorBase) {
        error.json(res);
    } else if (error instanceof PrismaClientUnknownRequestError) {
        throw new EmailAlreadyExists();
    } else {
        throw new InternalServerError();
    }
};
