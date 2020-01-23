const ShopAdminService = require("../../business-logic/services/shop-admin.service")
const shopAdminService = new ShopAdminService();

exports.addProduct = function (request, response) {
    shopAdminService.addProduct(request.body).then(result => {
        if (result && result.model) {
            response.status(result.status).json({
                message: "Product added"
            });
        }
    }).catch(error => {
        if (error.status) {
            response.status(error.status).json({
                error: error.error
            });
        } else {
            response.status(500).json({
                error: error
            });
        }
    });
}

exports.editProduct = function (request, response) {
    shopAdminService.editProduct(request.body).then(result => {
        if (result && result.model) {
            response.status(result.status).json({
                message: "Product edited"
            });
        }
    }).catch(error => {
        if (error.status) {
            response.status(error.status).json({
                error: error.error
            });
        } else {
            response.status(500).json({
                error: error
            });
        }
    });
}

exports.addCategory = function (request, response) {
    shopAdminService.addCategory(request.body).then(result => {
        if (result && result.model) {
            response.status(result.status).json({
                message: "Category added"
            });
        }
    }).catch(error => {
        if (error.status) {
            response.status(error.status).json({
                error: error.error
            });
        } else {
            response.status(500).json({
                error: error
            });
        }
    });
}