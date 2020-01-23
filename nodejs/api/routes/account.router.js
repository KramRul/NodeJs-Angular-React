const express = require("express");
const accountController = require("../controllers/account.controller");
const accountRouter = express.Router();

accountRouter.post("/login", accountController.login);
accountRouter.post("/register", accountController.register); 

module.exports = accountRouter;