import {Router} from "express";
import {contactsRoutes} from "./contacts.routes.js";
import {createContactsHandler} from "./create-contacts/create.contacts.handler.js";
import {getContactByIdHandler} from "./get-contactById/getContactById.handler.js";
import {findAllContactsHandler} from "./find-all-contacts/findAllContacts.handler.js";
import {deleteContactHandler} from "./delete-contact/delete.contact.handler.js";
import {updateContactHandler} from "./update-contact/update.contact.handler.js";

export default class Contacts{
    router = Router()
    constructor() {
        this.router.route(contactsRoutes.create).post(createContactsHandler);
        this.router.route(contactsRoutes.getById).get(getContactByIdHandler);
        this.router.route(contactsRoutes.getAll).get(findAllContactsHandler)
        this.router.route(contactsRoutes.delete).delete(deleteContactHandler)
        this.router.route(contactsRoutes.update).put(updateContactHandler)
    }
}