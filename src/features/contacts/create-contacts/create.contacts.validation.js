import Joi from "joi";

export const createContactsValidation = Joi.object({
    firstname: Joi.string().required(),
    lastname : Joi.string().required(),
    address : Joi.string().required(),
    phone: Joi.string().required(),
})