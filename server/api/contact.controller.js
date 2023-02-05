import contactDAO from "../dao/contactDAO.js";

export default class contactController {
    static async apiPostMessage(req, res, next) {
        try {
            const contactId = req.body.contact_id
            const message = req.body.text
            const userInfo = {
                name: req.body.name,
                _id: req.body.user_id
            }
            const email = req.body.email
            const date = new Date()

            const contactResponse = await contactDAO.addContact(
                contactId,
                userInfo,
                message,
                email,
                date,
            )
            res.json({ status: "success" })
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    }

    static async apiUpdateMessage(req, res, next) {
        try {
            const contactId = req.body.contact_id
            const text = req.body.text
            const date = new Date()

            const contactResponse = await contactDAO.updateContact(
                contactId,
                req.body.user_id,
                text,
                date,
            )

            var { error } = contactResponse
            if (error) {
                res.status(400), json({ error })
            }

            if (contactResponse.modifiedCount === 0) {
                throw new Error(
                    "Unable to update contact - user may not be original poster",
                )
            }

            res.json({ status: "success "})
            } catch (e) {
                res.status(500).json({ error: e.message })
            }
        }

        static async apiDeleteMessage(req, res, next) {
            try {
                const contactId = req.query.id
                const userId = req.body.user_id
                console.log(contactId)
                const contactResponse = await contactDAO.deleteContact(
                    contactId,
                    userId,
                )
                res.json({ status: "success" })
                } catch (e) {
                    res.status(500).json({ error: e.message })
                }
            }
        }