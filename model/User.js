const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;
const validator = require('validator');

// schema design 
const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email address is required"],
        trim: true,
        unique: [true, "Email must be unique."],
        lowercase: true,
        validate: [validator.isEmail, "Please provide a valid mail."]
    },
    password: {
        type: String,
        validate: {
            validator: (value) =>
                validator.isStrongPassword(value, {
                    minLength: 6,
                    minLowercase: 1,
                    minNumbers: 1,
                    minUppercase: 1,
                    minSymbols: 1
                }),
            message: "Password is not strong enough "
        }
    },
    confirmPassword: {
        type: String,
        validate: {
            validator: function (value) {
                return value === this.password;
            },
            message: "Password don't match."
        }
    },
    role: {
        type: String,
        enum: {
            values: ["user", "admin", "moderator"],
            message: "Role can't be {VALUE}, must be buyer/store-manager/admin",
        }
    },
    firstName: {
        type: String,
        trim: true,
        minLength: [3, "Name must be at least 3 characters."],
        maxLength: [100, "Name is too large."],
    },
    lastName: {
        type: String,
        trim: true,
        minLength: [3, "Name must be at least 3 characters."],
        maxLength: [100, "Name is too large."],
    },
    phone: {
        type: String,
        // validate: [validator.isMobilePhone, "Please provide a valid phone number"]
    },
    address: {
        type: String
    },
    imageUrl: {
        type: String,
        // validate: [validator.isURL, "Please provide a valid url"]
    },
    status: {
        type: String,
        enum: {
            values: ['active', 'inactive', 'blocked'],
            message: "Status can't be {VALUE}, must be active/inactive/blocked",
        },
        default: 'active'
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
}, {
    timestamps: true
})


// Schema -> Model -> Query 

const User = mongoose.model('User', userSchema);
module.exports = User;