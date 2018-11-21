const mongoose = require('mongoose');
const model = require("./../Signup/signmodel");
const bcrypt = require('bcrypt');

mongoose.Promise = Promise;

exports.logIn = (req, res) => {

    model.findOne({ email: req.body.email })
        .then((data) => {
            if (!data) {
                return res.status(400).send("Wrong Email");
            } else {
                bcrypt.compare(req.body.passWord, data.passWord, (err, result) => {
                    if (result == true) {
                        res.send("Welcome");
                    } else {
                        return res.status(400).send('Password Incorrect');
                    }
                })
            }
        });
};