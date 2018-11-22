const mongoose = require('mongoose');
const model = require("./signmodel");
const bcrypt = require('bcrypt');
const SALT_VAl = 10;

mongoose.Promise = Promise;

exports.savemodel = (req, res,err) => {

    model.findOne({
        userName: req.body.userName
        })
        .then((d) => {
            if (!d) {
                bcrypt.hash(req.body.passWord, SALT_VAl, (err, hash) => {
                    model.create({
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        email: req.body.email,
                        userName: req.body.userName,
                        passWord: hash,
                        created_at: req.body.created_at,
                        is_deleted: req.body.is_deleted
                    }).then((data) => {
                        res.status(200).json({
                            message: "Posted Data"
                        });
                    }).catch((err) => {
                        return res.status(500).json({
                            code:500,
                            message: "Server Error",
                            status:'Error',
                            errMsg: err.toString()
                        })
                    });

                });
            } else {
                return res.status(409).json({
                    code:"409",
                    message: "Username is already taken",
                    status:'Error',
                    errMsg: err.toString()
                })
            }

        });
};