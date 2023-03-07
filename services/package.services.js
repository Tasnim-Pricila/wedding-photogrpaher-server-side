const Package = require("../model/Package");

exports.createPackageServices = async (data) => {
    const result = await Package.create(data);
    return result;
}
exports.getPackageServices = async () => {
    const result = await Package.find({});
    const count = await Package.count();
    return {count, result};
}
exports.getPackageServicesById = async (id) => {
    const result = await Package.findOne({_id: id}).populate('queries');
    return result;
}