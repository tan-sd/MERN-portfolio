import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

let contact

export default class contactDAO {
    static async injectDB(conn) {
        if (contact) {
            return
        }
        try {
            contact = await conn.db(process.env.DATA_NS).collection("message")
            } catch (e) {
                console.error(`Unable to establish collection handles in userDAO: ${e}`)
            }
        }
        
        static async addContact(contactId, user, message, email, date) {
            try {
                const contactDoc = {
                    name: user.name,
                    email: email,
                    date: date,
                    text: message,
                    contact_id: new ObjectId(contactId),
                }

                return await contact.insertOne(contactDoc)
            } catch (e) {
                console.error(`Unable to post contact: ${e}`)
                return { error: e }
            }
        }

        static async updateContact(contactId, userId, text, email, date) {
            try {
                const updateContact = await contact.updateOne(
                    { user_id: userId, _id: ObjectId(contactId), email: email},
                    { $set: { text: text, date: date}},
                )

                return updateContact
            } catch (e) {
                console.error(`Unable to update contact: ${e}`)
                return { error: e }
            }
        }

        static async deleteContact(contactId, userId) {
            try {
                const deleteContact = await contact.deleteOne({
                    _id: ObjectId(contactId),
                    user_id: userId,
                })
                return deleteContact
            } catch (e) {
                console.error(`Unable to delete contact: ${e}`)
                return { error: e }
            }
        }
    }