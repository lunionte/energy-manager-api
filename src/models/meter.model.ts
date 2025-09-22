import { Joi } from "celebrate";

enum Status {
    ativo = "ativo",
    manutencao = "manutencao",
    inativo = "inativo",
}

export const newMeterSchema = Joi.object().keys({
    serial: Joi.string().trim().length(26).required(),
    location: Joi.string().trim().max(50).required(),
    status: Joi.string()
        .trim()
        .valid(...Object.values(Status))
        .required(),
});

export const updatedMeterSchema = Joi.object().keys({
    serial: Joi.string().trim().length(26).optional(),
    location: Joi.string().trim().max(50).optional(),
    status: Joi.string()
        .trim()
        .valid(...Object.values(Status))
        .optional(),
});
