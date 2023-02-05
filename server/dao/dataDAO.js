let data;

export default class dataDAO {
    static async injectDB(conn) {
        if (data) {
            return
        }
        try {
            data = await conn.db(process.env.DATA_NS).collection("message")
        } catch (e) {
            console.error(
                `Unable to establish a collection handle in dataDAO: ${e}`,
            )
        }
    }

    static async getData({
        filters = null,
        page = 0,
        dataPerPage = 20,
    } = {}) {
        let query
        if (filters) {
            if ("name" in filters) {
                query = { $text: { $search: filters["name"] } }
            } else if ("email" in filters) {
                query = { $text: { $search: filters["email"] } }
            }
        }

        let cursor

        try {
            cursor = await data
                .find(query)
        } catch (e) {
            console.error(`Unable to issue find command, ${e}`)
            return { dataList: [], totalNumData: 0 }
        }

        const displayCursor = cursor.limit(dataPerPage).skip(dataPerPage * page)

        try {
            const dataList = await displayCursor.toArray()
            const totalNumData = await data.countDocuments(query)

            return { dataList, totalNumData }
        } catch (e) {
            console.error(
                `Unable to convert cursor to array or problem counting documents, ${e}`
            )
            return { dataList: [], totalNumData: 0 }
        }
    }
}