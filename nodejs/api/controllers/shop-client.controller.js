const ShopClientService = require("../../business-logic/services/shop-client.service")
const shopClientService = new ShopClientService();

exports.findProducts = function (request, response) {
    shopClientService.findProducts(request.body).then(result => {
        if (result && result.model) {
            response.status(result.status).json(result.model);
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

exports.getProductsByCategory = function (request, response) {
    shopClientService.getProductsByCategory(request.body).then(result => {
        if (result && result.model) {
            response.status(result.status).json(result.model);
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

exports.getAllProducts = function (request, response) {
    shopClientService.getAllProducts().then(result => {
        if (result && result.model) {
            response.status(result.status).json(result.model);
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

exports.getDetailsOfProduct = function (request, response) {
    shopClientService.getDetailsOfProduct(request.body).then(result => {
        if (result && result.model) {
            response.status(result.status).json(result.model);
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

exports.getProductsInCard = function (request, response) {
    shopClientService.getProductsInCard(request.body).then(result => {
        if (result && result.model) {
            response.status(result.status).json(result.model);
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

exports.addProductToCard = function (request, response) {
    shopClientService.addProductToCard(request.body).then(result => {
        if (result && result.model) {
            response.status(result.status).json({
                message: "Product successfully added to card"
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

exports.deleteProductFromCard = function (request, response) {
    shopClientService.deleteProductFromCard(request.body).then(result => {
        if (result && result.model) {
            response.status(result.status).json({
                message: "Product successfully deleted"
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

exports.getAllCategories = function (request, response) {
    shopClientService.getAllCategories().then(result => {
        if (result && result.model) {
            response.status(result.status).json(result.model);
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

exports.default = function (request, response) {
    response.send("API is working")
}