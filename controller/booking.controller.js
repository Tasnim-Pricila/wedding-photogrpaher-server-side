const { createBookingServices, getBookingServices, getBookingServicesById, updateBookingServicesById, getBookingServicesByPackageId } = require("../services/booking.services");

exports.createBooking = async(req, res) => {
    try {
        const result = await createBookingServices(req.body);
        res.status(200).send({
            status: 'success',
            message: "Booking created successfully",
            data: result
        })
    } catch (error) {
        res.status(400).send({
            status: 'fail',
            message: "Could not create the Booking",
            error: error.message
        })
    }
}

exports.getBookings = async(req, res) => {
    try {
        const result = await getBookingServices();
        res.status(200).send({
            status: 'success',
            message: "Bookings get successfully",
            data: result
        })
    } catch (error) {
        res.status(400).send({
            status: 'fail',
            message: "Could not find any Bookings",
            error: error.message
        })
    }
}

exports.getBookingById = async(req, res) => {
    const { id } = req.params;
    try {
        const result = await getBookingServicesById(id);
        if(!result){
            return res.status(400).send({
                status: 'fail',
                message: "Could not find any Booking with this ID",
                error: error.message
            })
        }
        res.status(200).send({
            status: 'success',
            message: "Booking get successfully",
            data: result
        })
    } catch (error) {
        res.status(400).send({
            status: 'fail',
            message: "Could not find any Bookings",
            error: error.message
        })
    }
}

exports.updateBookingById = async (req, res) => {
    const { id } = req.params;
    // console.log(req.params, req.body);
    try {
        const result = await updateBookingServicesById(id, req.body);
        if(!result){
            return res.status(400).send({
                status: 'fail',
                message: "Could not find any Booking with this ID",
                error: error.message
            })
        }
        res.status(200).send({
            status: 'success',
            message: "Booking updated successfully",
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

exports.getBookingByPackageId = async(req, res) => {
    const { packageId } = req.params;
    // console.log(req.params);
    try {
        const result = await getBookingServicesByPackageId(packageId);
        if(!result){
            return res.status(400).send({
                status: 'fail',
                message: "Could not find any Booking with this ID",
                // error: error.message
            })
        }
        res.status(200).send({
            status: 'success',
            message: "Booking get successfully",
            data: result
        })
    } catch (error) {
        res.status(400).send({
            status: 'fail',
            message: "Could not find any Bookings",
            error: error.message
        })
    }
}
