import dataDAO from "../dao/dataDAO.js"

export default class dataController {
    static async apiGetData(req, res, next) {
        const dataPerPage = req.query.dataPerPage ? parseInt(req.query.dataPerPage, 10) : 20
        const page = req.query.page ? parseInt(req.query.page, 10) : 0

        let filters = {}
        if (req.query.name) {
            filters.name = req.query.name
        } else if (req.query.email) {
            filters.email = req.query.email
        }

        const { dataList, totalNumData } = await dataDAO.getData({
            filters,
            page,
            dataPerPage,
        })

        let response = {
            data: dataList,
            page: page,
            filters: filters,
            entries_per_page: dataPerPage,
            total_results: totalNumData,
        }
        res.json(response)
    }
}