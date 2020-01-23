const AccountService = require("../../business-logic/services/account.service")
const accountService = new AccountService();

exports.login = function (request, response) {
    accountService.login(request.body).then(result => {
        if (result && result.model) {
            response.status(result.status).json({
                message: "You are logged in",
                token: result.model.token,
                user: result.model.user
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
};

exports.register = function (request, response) {
    accountService.register(request.body).then(result => {
        if (result && result.model) {
            response.status(result.status).json({
                message: "User created"
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

};