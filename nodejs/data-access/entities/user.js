const mongoose = require("mongoose");

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
});
module.exports = mongoose.model("User", userScheme);