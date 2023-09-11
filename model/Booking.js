const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

// schema design 
const bookingSchema = mongoose.Schema({
    packageId: {
        type: ObjectId,
        ref: "Package",
        required: true
    },
    userId: {
        type: ObjectId,
        ref: 'User',
        required: [true, "User ID is required"],
    },
    phone: {
        type: String,
        required: [true, "Phone is required"],
    },
    address: {
        type: String,
        required: [true, "Address is required"],
    },
    bookingDate: [{
        type: Date,
        required: [true, "Booking Date is required"],
    }]
}, {
    timestamps: true
})

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;