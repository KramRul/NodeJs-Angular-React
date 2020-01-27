const mongoose = require("mongoose");
const UserRole = require("../enums/user-role");
const Schema = mongoose.Schema;

const userScheme = new Schema({
    name: {
        type: String
    },
    password: {
        type: String
    },
    address: {
        type: String
    },
    telephone: {
        type: String
    },
    role: {
        type: String,
        enum: Object.values(UserRole),
        default: UserRole.Client
    }
});

Object.assign(userScheme.statics, {
    UserRole,
});

module.exports = mongoose.model("User", userScheme);