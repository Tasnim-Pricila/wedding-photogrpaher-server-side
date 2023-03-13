const Booking = require("../model/Booking");

exports.createBookingServices = async (data) => {
    const result = await Booking.create(data);
    return result;
}

exports.getBookingServices = async () => {
    const result = await Booking.find({});
    const count = await Booking.count();
    return { count, result };
}

exports.getBookingServicesById = async (id) => {
    const result = await Booking.findOne({ _id: id });
    return result;
}

exports.updateBookingServicesById = async (id, data) => {
    // console.log(id, data);
    const result = await Booking.updateOne(
        { _id: id },
        { $set: data },
        { runValidators: true }
    );
    return result;
}

exports.getBookingServicesByPackageId = async (id) => {
    const result = await Booking.find({ packageId: id });
    return result;
}
