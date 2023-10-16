import {contactAdaptor} from "../../../shared/contact. adaptor.js";
import {findAllContactsService} from "./findAllContacts.service.js";

export const findAllContactsMediator = ()=>{
    return {
        execute : async ()=>{
            try {

                const contacts = await findAllContactsService().findAll()

                // Decrypt contacts
                const data = contacts.map(contact => contactAdaptor().decryptedData(contact))

                return {
                    data,
                    status: "success",
                    message: `${data.length} contact(s) found`
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