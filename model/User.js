const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const validator = require("validator");

// schema design
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      // required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email address is required"],
      trim: true,
      unique: [true, "Email must be unique."],
      lowercase: true,
      validate: [validator.isEmail, "Please provide a valid mail."],
    },
    password: {
      type: String,
      // required: [true, "Password is required"],
      validate: {
        validator: (value) =>
          validator.isStrongPassword(value, {
            minLength: 6,
            minLowercase: 1,
            minNumbers: 1,
            minUppercase: 1,
            minSymbols: 1,
          }),
        message: "Password is not strong enough ",
      },
    },
    confirmPassword: {
      type: String,
      // required: [true, "Confirm Password is required"],
      validate: {
        validator: function (value) {
          return value === this.password;
        },
        message: "Password don't match.",
      },
    },
    role: {
      type: String,
      enum: {
        values: ["user", "admin", "moderator"],
        message: "Role can't be {VALUE}, must be buyer/store-manager/admin",
      },
      default: "user",
    },
    phone: {
      type: String,
      // validate: [validator.isMobilePhone, "Please provide a valid phone number"]
    },
    address: {
      type: String,
    },
    imageUrl: {
      type: String,
      // validate: [validator.isURL, "Please provide a valid url"]
    },
    status: {
      type: String,
      enum: {
        values: ["active", "inactive", "blocked"],
        message: "Status can't be {VALUE}, must be active/inactive/blocked",
      },
      default: "active",
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
  },
  {
    timestamps: true,
  }
);

// Schema -> Model -> Query

const User = mongoose.model("User", userSchema);
module.exports = User;
