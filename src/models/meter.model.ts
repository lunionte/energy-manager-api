import { Joi } from "celebrate";

enum Status {
    ativo = "ativo",
    manutencao = "manutencao",
    inativo = "inativo",
}

export const newMeterSchema = Joi.object().keys({
    serial: Joi.string().trim().max(50).required(),
    location: Joi.string().trim().max(50).required(),
    status: Joi.string()
        .trim()
        .valid(...Object.values(Status))
        .required(),
});
