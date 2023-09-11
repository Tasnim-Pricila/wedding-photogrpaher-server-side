const express = require('express');
const bookingController = require('../controller/booking.controller');
const bookingRoute = express.Router();

bookingRoute.route('/')
    .post(bookingController.createBooking)
    .get(bookingController.getBookings)
bookingRoute.route('/:id')
    .get(bookingController.getBookingById)
    .patch(bookingController.updateBookingById)
bookingRoute.route('/package/:packageId')
    .get(bookingController.getBookingByPackageId)
bookingRoute.route('/user/:userId')
    .get(bookingController.getBookingByUserId)

module.exports = bookingRoute;