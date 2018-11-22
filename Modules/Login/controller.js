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
                                return res.status(400).send('Welcome');

                            } else {
                                return res.status(400).send('Password Incorrect');
                            }


                        });

                        const userData ={
                            firstName: data.firstName,
                            lastName: data.lastName,
                            email: data.email,
                            userName: data.userName,
                            _id: data._id
            
                        };
                        const JwtToken = jWT.sign(userData, 'secret key'
                        );
                        return res.status(200).json({
                            success: 'Welcome to JWT',
                            token: JwtToken,
                            userData:userData
                    
                        });

                    }
                })
            };

           