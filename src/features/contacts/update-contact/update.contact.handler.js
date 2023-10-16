import asyncHandler from "express-async-handler";
import {updateContactValidation} from "./update.contact.validation.js";
import {updateContactMediator} from "./update.contact.mediator.js";
import logger from "../../../shared/logging/logger.js";

export const updateContactHandler = asyncHandler(async (req, res) => {
    const id = +req.params.id
    const {firstname, lastname, address, phone} = req.body

    const {error, values}= updateContactValidation().validate({id, firstname, lastname, address, phone})

    if (error) {
        res.status(400)
        throw new Error(error.message)
    }
    const payload = {id, firstname, lastname, address, phone}
    const mediator = await updateContactMediator(payload).execute()

    if (mediator.status !== "success") {
        res.status(400).throw
        new Error(mediator.message)
    }

    res.status(200).json(mediator)
})