import {prisma} from "../../../db.js";
import logger from "../../../shared/logging/logger.js";

export const createContactsService = ()=>{
    return{
        create :  async (payload)=>{
            return prisma.contacts.create({
                data : payload
            });
        },
        find : async ()=>{
            return prisma.contacts.findMany()
        }
    }
}