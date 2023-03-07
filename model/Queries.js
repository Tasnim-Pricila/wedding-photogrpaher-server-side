
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;
const validator = require('validator');

// schema design 
const querySchema = mongoose.Schema({
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
    userEmail: {
        type: String,
        required: [true, "Email is required"],
    },
    question: {
        type: String,
        required: [true, "Question is required"],
    },
    reply: [{
        userId: {
            type: ObjectId,
            ref: 'User',
        },
        userEmail: {
            type: String,
        },
        answer: {
            type: String
        },
        replyDate: {
            type: Date
        }
    }]
}, {
    timestamps: true
})


// Schema -> Model -> Query 

const Query = mongoose.model('Query', querySchema);
module.exports = Query;