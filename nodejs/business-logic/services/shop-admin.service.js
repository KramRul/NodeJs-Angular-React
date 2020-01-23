const connection = require("../../common/connection-module");
const mongoose = require("mongoose");
const GenericResponseView = require("../../common/generic-response-view");
const Product = require("../../data-access/entities/product");
const Category = require("../../data-access/entities/category");

class ShopAdminService {
    constructor() {

    }

    addProduct(addProductModel) {
        return new Promise(function (resolve, reject) {
            Product.find({
                name: addProductModel.name
            }).exec().then(products => {
                if (products.length >= 1) {
                    reject(new GenericResponseView(null, {
                        message: "Product with same name already exists"
                    }, 401));
                }
                Category.find({
                    '_id': {
                        $in: addProductModel.categories.map(id => {
                            return new mongoose.Types.ObjectId(id)
                        })
                    }
                }).exec().then(categories => {
                    const product = new Product({
                        _id: new mongoose.Types.ObjectId(),
                        name: addProductModel.name,
                        quantity: addProductModel.quantity,
                        price: addProductModel.price,
                        description: addProductModel.description,
                        categories: categories
                    });
                    product.save().then(result => {
                        console.log(result);
                        resolve(new GenericResponseView(result, null, 201));
                    }).catch(err => {
                        console.log(err);
                        reject(new GenericResponseView(null, err, 500));
                    });
                }).catch(err => {
                    console.log(err);
                    reject(new GenericResponseView(null, err, 500));
                })

            }).catch(err => {
                console.log(err);
                reject(new GenericResponseView(null, err, 500));
            });
        });
    }

    editProduct(editProductModel) {
        return new Promise(function (resolve, reject) {
            Product.find({
                name: editProductModel.name
            }).exec().then(products => {
                if (products.length < 1) {
                    reject(new GenericResponseView(null, {
                        message: "This product does not exist"
                    }, 401));
                }
                Category.find({
                    '_id': {
                        $in: editProductModel.categories.map(id => {
                            return new mongoose.Types.ObjectId(id)
                        })
                    }
                }).exec().then(categories => {
                    Product.findByIdAndUpdate(
                        editProductModel.id, {
                            name: editProductModel.name,
                            quantity: editProductModel.quantity,
                            price: editProductModel.price,
                            description: editProductModel.description,
                            categories: categories
                        }).then(result => {
                        console.log(result);
                        resolve(new GenericResponseView(result, null, 201));
                    }).catch(err => {
                        console.log(err);
                        reject(new GenericResponseView(null, err, 500));
                    });
                });
            }).catch(err => {
                console.log(err);
                reject(new GenericResponseView(null, err, 500));
            });
        });
    }

    getProduct(getProductModel) {
        return new Promise(function (resolve, reject) {
            Product.findById(getProductModel.id).select("_id name price quantity description categories").populate('categories').exec().then(product => {
                    if (product.length < 1) {
                        reject(new GenericResponseView(null, {
                            message: "Product not found"
                        }, 401));
                    }
                    resolve(new GenericResponseView(product, null, 201));
                })
                .catch(err => {
                    console.log(err);
                    reject(new GenericResponseView(null, err, 500));
                });
        });
    }

    addCategory(addCategoryModel) {
        return new Promise(function (resolve, reject) {
            Category.find({
                name: addCategoryModel.name
            }).exec().then(async categories => {
                if (categories.length >= 1) {
                    reject(new GenericResponseView(null, {
                        message: "Category with same name already exists"
                    }, 401));
                }
                let subcategories = [];
                if (addCategoryModel.subcategories) {
                    subcategories = addCategoryModel.subcategories.map(sub => {
                        return new Category({
                            _id: new mongoose.Types.ObjectId(),
                            name: sub.name,
                            description: sub.description
                        })
                    })
                }
                await Promise.all(subcategories.map(p => p.save()));
                const category = new Category({
                    _id: new mongoose.Types.ObjectId(),
                    name: addCategoryModel.name,
                    description: addCategoryModel.description,
                    subcategories: subcategories
                });
                category.save().then(result => {
                    console.log(result);
                    resolve(new GenericResponseView(result, null, 201));
                }).catch(err => {
                    console.log(err);
                    reject(new GenericResponseView(null, err, 500));
                });
            }).catch(err => {
                console.log(err);
                reject(new GenericResponseView(null, err, 500));
            });
        });
    }
}

module.exports = ShopAdminService;