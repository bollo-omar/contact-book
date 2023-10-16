import {updateContactValidation} from "./update.contact.validation.js";
import {updateContactService} from "./update.contact.service.js";
import {contactAdaptor} from "../../../shared/contact. adaptor.js";
import {dataEncryptionService} from "../../../shared/data-encription-service/dataEncryptionService.js";
import logger from "../../../shared/logging/logger.js";

export const updateContactMediator = (payload) => {
    return {
        execute: async () => {
            try {
                const resultById = await updateContactService().findById(payload.id)

                if (!resultById) {

                    return {
                        status: "fail",
                        message: "record not found"
                    }
                }
                const {id, ...rest} = payload
                const updatedContact = await updateContactService().update(id, contactAdaptor().encryptedData(rest))
               const data = contactAdaptor().decryptedData(updatedContact)

                return {
                    status: "success",
                    message: "everything is cool",
                    data
                }

            } catch (e) {
                logger.error(e.message)
                return {
                    status: "error",
                    message: "unexpected error occurred, please try again later"
                }
            }
        }
    }
}