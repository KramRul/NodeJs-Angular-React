const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const category = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    isSubCategory: {
        type: Boolean
    },
    subcategories: [{
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }]
});
module.exports = mongoose.model("Category", category);