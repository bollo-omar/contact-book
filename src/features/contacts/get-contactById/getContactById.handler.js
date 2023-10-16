import asyncHandler from "express-async-handler";
import {getContactByIdMediator} from "./getContactById.mediator.js";

export const getContactByIdHandler = asyncHandler(async (req, res)=>{
    const id = +req.params.id

    const mediator = await getContactByIdMediator(id).execute()

    if(mediator.status!=="success"){
        res.status(400)
        throw new Error(mediator.message)
    }
    res.status(200).json(mediator)
})