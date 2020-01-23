const connection = require("../../common/connection-module");
const mongoose = require("mongoose");
const GenericResponseView = require("../../common/generic-response-view");
const Product = require("../../data-access/entities/product");
const Category = require("../../data-access/entities/category");
const ShopCard = require("../../data-access/entities/shop-card");
const ShopCardProduct = require("../../data-access/entities/shop-card-product");
const User = require('../../data-access/entities/user');

class ShopClientService {
    findProducts(findProductsModel) {
        return new Promise(function (resolve, reject) {
            Product.find({
                $or: [{
                        name: {
                            $regex: new RegExp(findProductsModel.searchQuery),
                            $options: "i"
                        }
                    },
                    {
                        description: {
                            $regex: new RegExp(findProductsModel.searchQuery),
                            $options: "i"
                        }
                    }
                ]
            }).select("_id name price quantity description categories").populate('categories').exec().then(products => {
                if (products.length < 1) {
                    reject(new GenericResponseView(null, {
                        message: "Products not found"
                    }, 401));
                }
                resolve(new GenericResponseView(products, null, 201));
            }).catch(err => {
                console.log(err);
                reject(new GenericResponseView(null, err, 500));
            });
        });
    }

    getAllProducts() {
        return new Promise(function (resolve, reject) {
            Product.find({}).select("_id name price quantity description categories").populate('categories').exec().then(products => {
                if (products.length < 1) {
                    reject(new GenericResponseView(null, {
                        message: "No product was added"
                    }, 401));
                }
                resolve(new GenericResponseView(products, null, 201));
            }).catch(err => {
                console.log(err);
                reject(new GenericResponseView(null, err, 500));
            });
        });
    }

    getAllCategories() {
        return new Promise(function (resolve, reject) {
            Category.find({}).select("_id name description subcategories").populate('subcategories').exec().then(categories => {
                if (categories.length < 1) {
                    reject(new GenericResponseView(null, {
                        message: "Categories not found"
                    }, 401));
                }
                resolve(new GenericResponseView(categories, null, 201));
            }).catch(err => {
                console.log(err);
                reject(new GenericResponseView(null, err, 500));
            });
        });
    }

    getProductsByCategory(getProductsByCategoryModel) {
        return new Promise(function (resolve, reject) {
            Product.find({
                "categories._id": mongoose.Types.ObjectId(getProductsByCategoryModel.categoryId)
            }).select("_id name price quantity description categories").populate('categories').exec().then(products => {
                if (products.length < 1) {
                    reject(new GenericResponseView(null, {
                        message: "Products not found"
                    }, 401));
                }
                resolve(new GenericResponseView(products, null, 201));
            }).catch(err => {
                console.log(err);
                reject(new GenericResponseView(null, err, 500));
            });
        });
    }

    getDetailsOfProduct(getDetailsOfProductModel) {
        return new Promise(function (resolve, reject) {
            Product.findById(getDetailsOfProductModel.productId).select("_id name price quantity description categories").populate('categories').exec().then(products => {
                if (products.length < 1) {
                    reject(new GenericResponseView(null, {
                        message: "Products not found"
                    }, 401));
                }
                resolve(new GenericResponseView(products, null, 201));
            }).catch(err => {
                console.log(err);
                reject(new GenericResponseView(null, err, 500));
            });
        });
    }

    getProductsInCard(getProductsInCardModel) {
        return new Promise(function (resolve, reject) {
            ShopCard.findOne({
                "user": mongoose.Types.ObjectId(getProductsInCardModel.userId)
            }).select("products").exec().then(card => {
                if (card && card.products.length < 1) {
                    reject(new GenericResponseView(null, {
                        message: "Products not found"
                    }, 401));
                }
                resolve(new GenericResponseView(card.products, null, 201));
            }).catch(err => {
                console.log(err);
                reject(new GenericResponseView(null, err, 500));
            });
        });
    }

    addProductToCard(addProductToCardModel) {
        return new Promise(function (resolve, reject) {
            User.findById(addProductToCardModel.userId).exec().then(user => {
                if (!user) {
                    reject(new GenericResponseView(null, {
                        message: "User not found"
                    }, 401));
                }
                ShopCard.findOne({
                    "user": mongoose.Types.ObjectId(addProductToCardModel.userId)
                }).exec().then(card => {
                    Product.findById(addProductToCardModel.productId).exec().then(product => {
                        if (!product) {
                            reject(new GenericResponseView(null, {
                                message: "Products not found"
                            }, 401));
                        }
                        if (!card) {
                            let shopCardProduct = new ShopCardProduct({
                                _id: new mongoose.Types.ObjectId(),
                                product: product,
                                quantity: 1
                            });
                            shopCardProduct.save().then(result => {
                                console.log(result);
                                resolve(new GenericResponseView(result, null, 201));
                            }).catch(err => {
                                console.log(err);
                                reject(new GenericResponseView(null, err, 500));
                            });
                            const shopCard = new ShopCard({
                                _id: new mongoose.Types.ObjectId(),
                                user: user,
                                products: [shopCardProduct]
                            });
                            shopCard.save().then(result => {
                                console.log(result);
                                resolve(new GenericResponseView(result, null, 201));
                            }).catch(err => {
                                console.log(err);
                                reject(new GenericResponseView(null, err, 500));
                            });
                        } else {
                            let shopCardProduct = new ShopCardProduct({
                                _id: new mongoose.Types.ObjectId(),
                                product: product,
                                quantity: 1
                            });
                            shopCardProduct.save().then(result => {
                                console.log(result);
                                resolve(new GenericResponseView(result, null, 201));
                            }).catch(err => {
                                console.log(err);
                                reject(new GenericResponseView(null, err, 500));
                            });
                            card.products.push(shopCardProduct);
                            ShopCard.findByIdAndUpdate(card._id, {
                                products: card.products
                            }).then(result => {
                                console.log(result);
                                resolve(new GenericResponseView(result, null, 201));
                            }).catch(err => {
                                console.log(err);
                                reject(new GenericResponseView(null, err, 500));
                            });
                        }
                    }).catch(err => {
                        console.log(err);
                        reject(new GenericResponseView(null, err, 500));
                    });
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

    deleteProductFromCard(deleteProductFromCardModel) {
        return new Promise(function (resolve, reject) {
            ShopCard.findOne({
                "user": mongoose.Types.ObjectId(deleteProductFromCardModel.userId)
            }).exec().then(card => {
                let index = card.products.indexOf(deleteProductFromCardModel.cardProductId);
                if (index === -1) {
                    reject(new GenericResponseView(null, {
                        message: "Product not found"
                    }, 500));
                }
                card.products.pull({
                    "_id": new mongoose.Types.ObjectId(deleteProductFromCardModel.cardProductId)
                });
                card.save().then(result => {
                    console.log(result);
                    resolve(new GenericResponseView(result, null, 201));
                }).catch(err => {
                    console.log(err);
                    reject(new GenericResponseView(null, err, 500));
                });
            })
        });
    }
}

module.exports = ShopClientService;