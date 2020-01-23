const express = require("express");
const shopAdminController = require("../controllers/shop-admin.controller");
const shopAdminRouter = express.Router();
const checkAuth = require("../middleware/check-auth");
 
shopAdminRouter.post("/addProduct", checkAuth, shopAdminController.addProduct);
shopAdminRouter.post("/editProduct", checkAuth, shopAdminController.editProduct);
//shopAdminRouter.post("/getProduct", checkAuth, shopAdminController.editProduct);
shopAdminRouter.post("/addCategory", checkAuth, shopAdminController.addCategory);
module.exports = shopAdminRouter;