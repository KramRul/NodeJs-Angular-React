const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const shopCardProductScheme = new Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number
    }
});

module.exports = mongoose.model("ShopCardProduct", shopCardProductScheme);