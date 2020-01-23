const express = require("express");
const shopClientController = require("../controllers/shop-client.controller");
const shopClientRouter = express.Router();
 
shopClientRouter.get("/", shopClientController.default);
shopClientRouter.get("/findProducts", shopClientController.findProducts);
shopClientRouter.get("/getAllProducts", shopClientController.getAllProducts);
shopClientRouter.get("/getDetailsOfProduct", shopClientController.getDetailsOfProduct);
shopClientRouter.get("/getProductsByCategory", shopClientController.getProductsByCategory);
shopClientRouter.get("/getProductsInCard", shopClientController.getProductsInCard);
shopClientRouter.post("/addProductToCard", shopClientController.addProductToCard);
shopClientRouter.post("/deleteProductFromCard", shopClientController.deleteProductFromCard);
shopClientRouter.get("/getAllCategories", shopClientController.getAllCategories);

module.exports = shopClientRouter;