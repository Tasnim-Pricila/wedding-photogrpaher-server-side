const { createQueryServices, getQueryServices, getQueryServicesById, getQueryServicesByPackageId, updateQueryServicesById } = require("../services/query.services");

exports.createQuery = async(req, res) => {
    try {
        const result = await createQueryServices(req.body);
        res.status(200).send({
            status: 'success',
            message: "Query created successfully",
            data: result
        })
    } catch (error) {
        res.status(400).send({
            status: 'fail',
            message: "Could not create the Query",
            error: error.message
        })
    }
}

exports.getQueries = async(req, res) => {
    try {
        const result = await getQueryServices();
        res.status(200).send({
            status: 'success',
            message: "Querys get successfully",
            data: result
        })
    } catch (error) {
        res.status(400).send({
            status: 'fail',
            message: "Could not find any Querys",
            error: error.message
        })
    }
}

exports.getQueryById = async(req, res) => {
    const { id } = req.params;
    try {
        const result = await getQueryServicesById(id);
        if(!result){
            return res.status(400).send({
                status: 'fail',
                message: "Could not find any Query with this ID",
                error: error.message
            })
        }
        res.status(200).send({
            status: 'success',
            message: "Query get successfully",
            data: result
        })
    } catch (error) {
        res.status(400).send({
            status: 'fail',
            message: "Could not find any Querys",
            error: error.message
        })
    }
}
exports.updateQueryById = async (req, res) => {
    const { id } = req.params;
    // console.log(req.params, req.body);
    try {
        const result = await updateQueryServicesById(id, req.body);
        if(!result){
            return res.status(400).send({
                status: 'fail',
                message: "Could not find any Query with this ID",
                error: error.message
            })
        }
        res.status(200).send({
            status: 'success',
            message: "Query updated successfully",
            data: result
        })
    } catch (error) {
        res.status(400).send({
            status: 'fail',
            message: "Update failed",
            error: error.message
        })
    }
}

exports.getQueryByPackageId = async(req, res) => {
    const { packageId } = req.params;
    // console.log(req.params);
    try {
        const result = await getQueryServicesByPackageId(packageId);
        if(!result){
            return res.status(400).send({
                status: 'fail',
                message: "Could not find any Query with this ID",
                // error: error.message
            })
        }
        res.status(200).send({
            status: 'success',
            message: "Query get successfully",
            data: result
        })
    } catch (error) {
        res.status(400).send({
            status: 'fail',
            message: "Could not find any Queries",
            error: error.message
        })
    }
}
