const Package = require("../model/Package");
const Query = require("../model/Queries");

exports.createQueryServices = async (data) => {
    const result = await Query.create(data);
    const { _id: queryId, packageId } = result;
    const insertPackage = await Package.updateOne(
        { _id: packageId },
        { $push: { queries: queryId } }
    )
    // console.log(data);
    return result;
}
exports.getQueryServices = async () => {
    const result = await Query.find({});
    const count = await Query.count();
    return { count, result };
}
exports.getQueryServicesById = async (id) => {
    const result = await Query.findOne({ _id: id });
    return result;
}
exports.updateQueryServicesById = async (id, data) => {
    // console.log(id, data);
    const result = await Query.updateOne(
        { _id: id },
        { $push: { reply: data} },
        { runValidators: true }
    );
    return result;
}
exports.getQueryServicesByPackageId = async (id) => {
    const result = await Query.find({ packageId: id });
    return result;
}
