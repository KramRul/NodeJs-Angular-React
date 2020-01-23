const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productScheme = new Schema({
    name: {
        type: String
    },
    quantity: {
        type: Number
    },
    price: {
        type: Number
    },
    description: {
        type: String
    },
    categories: [{
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }]
});

module.exports = mongoose.model("Product", productScheme);