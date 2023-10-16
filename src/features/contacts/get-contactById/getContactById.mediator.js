import {getContactByIdService} from "./getContactById.service.js";
import {contactAdaptor} from "../../../shared/contact. adaptor.js";

export const getContactByIdMediator = (id) => {
    return {
        execute: async () => {
            try {
                const contact = await getContactByIdService().findById(id)
                if (!contact) {
                    return {
                        status: "fail",
                        message: "Contact not found"
                    }
                }
                return {
                    data: contactAdaptor().decryptedData(contact),
                    status: "success"
                }
            } catch (e) {
                return {
                    status: "error",
                    message: "unexpected error occurred, please try again later"
                }
            }
        }
    }
}