const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;
const validator = require('validator');

// schema design 
const packageSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        trim: true,
        unique: [true, "Title must be unique."],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        trim: true,
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, 'Price can not be less than 0'],
    },
    img: {
        type: String,
        required: [true, "Image is required"],
    },
    queries: [{
        type: ObjectId,
        ref: 'Query'
    }],
}, {
    timestamps: true
})


// Schema -> Model -> Query 

const Package = mongoose.model('Package', packageSchema);
module.exports = Package;