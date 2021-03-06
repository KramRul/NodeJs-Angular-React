const User = require('../../data-access/entities/user');
const connection = require("../../common/connection-module");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const GenericResponseView = require("../../common/generic-response-view");
const commonVariables = require("../../common/common-variables");
const UserRole = require("../../data-access/enums/user-role");

class AccountService {
    constructor() {

    }

    login(userModel) {
        return new Promise(function (resolve, reject) {
            User.find({
                name: userModel.name
            }).exec().then(users => {
                if (users.length < 1) {
                    reject(new GenericResponseView(null, {
                        message: "Auth failed"
                    }, 401));
                }
                bcrypt.compare(userModel.password, users[0].password, (err, result) => {
                    if (err) {
                        reject(new GenericResponseView(null, {
                            message: "Auth failed"
                        }, 401));
                    }
                    if (result) {
                        const token = jwt.sign({
                                name: users[0].name,
                                userId: users[0]._id
                            },
                            commonVariables.JWT_KEY, {
                                expiresIn: "1h"
                            }
                        );
                        resolve(new GenericResponseView({
                            message: "Auth successful",
                            token: token,
                            user: users[0]
                        }, null, 200));
                    }
                    reject(new GenericResponseView(null, {
                        message: "Auth failed"
                    }, 401));
                });
            }).catch(err => {
                console.log(err);
                reject(new GenericResponseView(null, err, 500));
            });
        });
    }

    register(userModel) {
        return new Promise(function (resolve, reject) {
            User.find({
                name: userModel.name
            }).exec().then(user => {
                if (user.length >= 1) {
                    reject(new GenericResponseView(null, {
                        message: "Mail exists"
                    }, 409));
                } else {
                    bcrypt.hash(userModel.password, 10, (err, hash) => {
                        if (err) {
                            reject(new GenericResponseView(null, err, 500));
                        } else {
                            const user = new User({
                                _id: new mongoose.Types.ObjectId(),
                                name: userModel.name,
                                password: hash,
                                address: userModel.address,
                                telephone: userModel.telephone,
                                role: UserRole.Client
                            });
                            user.save().then(result => {
                                console.log(result);
                                resolve(new GenericResponseView(result, null, 201));
                            }).catch(err => {
                                console.log(err);
                                reject(new GenericResponseView(null, err, 500));
                            });
                        }
                    });
                }
            });
        });
    }
}

module.exports = AccountService;