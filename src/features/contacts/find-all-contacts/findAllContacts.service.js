import {prisma} from "../../../db.js";

export const findAllContactsService  = ()=>{

    return {
        findAll : async ()=>{
            return prisma.contacts.findMany()
        }
    }
}