import {createContactsService} from "./create.contacts.service.js";
import {contactAdaptor} from "../../../shared/contact. adaptor.js";



export const createContactsMediator = (payload) => {

    return {
        execute: async () => {
            try {

                const createUserDto = contactAdaptor().encryptedData(payload)

                const contacts = await createContactsService().find()

                // Decrypt contacts
                const decryptedValue = contacts.map(contact => contactAdaptor().decryptedData(contact))
                // search contacts Array
                const contact = decryptedValue.filter(contact => contact.phone === payload.phone)

                if (contact.length !== 0) {
                    return {
                        status: "fail",
                        message: "Contact already exists"
                    }
                }
                const result = await createContactsService().create(createUserDto)

                return {
                    data: contactAdaptor().decryptedData(result),
                    status: "success",
                    message: "contact added successfully"
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