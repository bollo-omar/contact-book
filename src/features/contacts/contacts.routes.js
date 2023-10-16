const baseUrl = "/contacts"
export const contactsRoutes = {
    create : baseUrl,
    getById: `${baseUrl}/:id`,
    delete: `${baseUrl}/:id`,
    getAll : baseUrl,
    update : `${baseUrl}/:id`
}