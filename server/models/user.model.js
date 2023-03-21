const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { isEmail } = require("validator"); // using validator instead of regex

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, "First name is required"],
        },
        lastName: {
            type: String,
            required: [true, "Last name is required"],
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            validate: [isEmail, 'Invalid Email']
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: [8, "Password must be 8 characters or longer"]
        },
        phoneNumber: {
            type: Number,
            required: [true, "Phone Number is required"]
        },
        address: {
            type: String,
            required: [true, "Address is required"]
        },
        city: {
            type: String,
            required: [true, "City is required"]
        },
        state: {
            type: String,
            required: [true, "State is required"]
        },
        zip: {
            type: Number,
            required: [true, "Zip Code is required"]
        },
        admin: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);

// Middleware

// add this after UserSchema is defined
// setting up confirm password so it does not go to
UserSchema.virtual('confirmPassword')
    .get(() => this._confirmPassword)
    .set(value => this._confirmPassword = value);

UserSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
});

// this should go after 
UserSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});

module.exports = mongoose.model("User", UserSchema)



