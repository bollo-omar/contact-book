import {prisma} from "../../../db.js";

export const deleteContactService = ()=>{

    return {
        find :  async (id)=>{
            return prisma.contacts.findUnique({
                where : {
                    id
                }
            })
        },
        delete  : async (id)=>{
            return prisma.contacts.delete({
                where: {
                    id
                }
            })
        }
    }
}