import { Joi } from "celebrate";

export const newReadingSchema = Joi.object().keys({
    medidorId: Joi.string().max(30).trim().required(),
    consumoKwh: Joi.number().required(),
});
