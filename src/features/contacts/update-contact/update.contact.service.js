import {prisma} from "../../../db.js";

export const updateContactService = () => {

    return {
        findById: async (id) => {
            return prisma.contacts.findUnique({
                where: {
                    id
                }
            })
        },
        update: async (id, payload) => {
            return prisma.contacts.update({
                where: {
                    id
                },
                data: payload
            })
        }
    }
}