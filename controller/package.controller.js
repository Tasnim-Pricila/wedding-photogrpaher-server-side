const { createPackageServices, getPackageServices, getPackageServicesById } = require("../services/package.services");

exports.createPackage = async(req, res, next) => {
    try {
        const result = await createPackageServices(req.body);
        res.status(200).send({
            status: 'success',
            message: "Package created successfully",
            data: result
        })
    } catch (error) {
        res.status(400).send({
            status: 'fail',
            message: "Could not create the Package",
            error: error.message
        })
    }
}

exports.getPackages = async(req, res, next) => {
    try {
        const result = await getPackageServices();
        res.status(200).send({
            status: 'success',
            message: "Packages get successfully",
            data: result
        })
    } catch (error) {
        res.status(400).send({
            status: 'fail',
            message: "Could not find any Packages",
            error: error.message
        })
    }
}

exports.getPackageById = async(req, res, next) => {
    const { id } = req.params;
    try {
        const result = await getPackageServicesById(id);
        if(!result){
            return res.status(400).send({
                status: 'fail',
                message: "Could not find any Package with this ID",
                error: error.message
            })
        }
        res.status(200).send({
            status: 'success',
            message: "Package get successfully",
            data: result
        })
    } catch (error) {
        res.status(400).send({
            status: 'fail',
            message: "Could not find any Packages",
            error: error.message
        })
    }
}
