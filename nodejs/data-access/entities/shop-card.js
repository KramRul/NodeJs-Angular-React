const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shopCard = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'ShopCardProduct'
    }]
});
module.exports = mongoose.model("ShopCard", shopCard);