const mongoose = require('mongoose');
const model = require("./../Signup/signmodel");
const bcrypt = require('bcrypt');
const jWT = require('jsonwebtoken');


mongoose.Promise = Promise;

exports.logIn = (req, res) => {

        model.findOne({
                email: req.body.email
            })
            .then((data) => {
                    if (!data) {
                        return res.status(400).send("Wrong Email");
                    } else {
                        bcrypt.compare(req.body.passWord, data.passWord, (err, result) => {
                            if (result == true) {
                                const JwtToken = jWT.sign({
                                    firstName: data.firstName,
                                    lastName: data.lastName,
                                    email: data.email,
                                    userName: data.userName,
                                    _id: data._id

                                });
                                return res.status(200).json({
                                    success: 'Welcome to JWT',
                                    token: JwtToken
                                });
                            } else {
                                return res.status(400).send('Password Incorrect');
                            }

                        });
                    }
                })
            };