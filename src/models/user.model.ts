import { Joi } from "celebrate";

export interface User {
    id: string;
    email: string;
    role: string;
    password?: string;
}

export const newUserSchema = Joi.object().keys({
    email: Joi.string().email().max(50).trim().required(),
    password: Joi.string().max(100).trim().required(),
});
