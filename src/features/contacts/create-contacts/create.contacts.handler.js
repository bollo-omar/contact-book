import asyncHandler from "express-async-handler";
import {createContactsValidation} from "./create.contacts.validation.js";
import {createContactsMediator} from "./create.contacts.mediator.js";

export const createContactsHandler = asyncHandler(async (req, res)=>{
    const {firstname, lastname, address, phone} = req.body;
    const {error, value} = createContactsValidation.validate({firstname, lastname, address, phone})

    if(error){
        res.status(400)
        throw new Error(error.message)
    }

    const mediator = await createContactsMediator(value).execute()

    if(mediator.status!=="success"){
        res.status(400)
        throw new Error(mediator.message)
    }
    res.status(201).json(mediator)

})