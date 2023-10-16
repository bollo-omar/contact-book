import {prisma} from "../../../db.js";

export const getContactByIdService = ()=>{
    return {
        findById : async (id)=>{
            return prisma.contacts.findUnique({
                where : {
                    id
                }
            })
        }
    }
}