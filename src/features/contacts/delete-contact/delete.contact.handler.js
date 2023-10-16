import asyncHandler from "express-async-handler";
import {deleteContactMediator} from "./delete.contact.mediator.js";

export const deleteContactHandler = asyncHandler(async (req, res)=>{
    const id = +req.params.id

    const mediator = await deleteContactMediator(id).execute()


    if(mediator.status!=="success"){
        res.status(400)
        throw new Error(mediator.message)
    }
    res.status(200).json(mediator)
})