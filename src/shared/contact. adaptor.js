import {dataEncryptionService}from "./data-encription-service/dataEncryptionService.js";
import logger from "./logging/logger.js";

export const contactAdaptor = () => {
const {encrypt, decrypt} = dataEncryptionService()
    return {
        encryptedData: (payload) => ({
            firstname: encrypt(payload.firstname),
            lastname: encrypt(payload.lastname),
            address: encrypt(payload.address),
            phone: encrypt(payload.phone)
        }),
        decryptedData: (payload) =>{

            return{
                id: payload.id,
                firstname: decrypt(payload.firstname),
                lastname: decrypt(payload.lastname),
                address: decrypt(payload.address),
                phone: decrypt(payload.phone),
                createdAt: payload.createdAt,
                updatedAt: payload.updatedAt
            }
        }
    }
}