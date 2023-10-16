import {deleteContactService} from "./delete.contact.service.js";

export const deleteContactMediator = (id) => {

    return {
        execute: async () => {
            try {
                const contact = await deleteContactService().find(id);
                if (!contact) {
                    return {
                        status: " fail",
                        message: "record does not exist"
                    }
                }
                await deleteContactService().delete(id)
                return {
                    status: "success",
                    message: "contact deleted successfully"
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