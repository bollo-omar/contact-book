import asyncHandler from "express-async-handler";
import {findAllContactsMediator} from "./findAllContacts.mediator.js";

export const findAllContactsHandler = asyncHandler (async(req, res)=>{
    const mediator = await findAllContactsMediator().execute()

    if(mediator.status !== "success"){
        res.status(400)
        throw new Error(mediator.message)
    }
    res.status(200).json(mediator)
})