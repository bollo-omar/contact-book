import Joi from "joi";

export const updateContactValidation = ()=>{
    return Joi.object({
        id : Joi.number().required(),
        firstname: Joi.string().required(),
        lastname : Joi.string().required(),
        address : Joi.string().required(),
        phone: Joi.string().required(),
    })
}