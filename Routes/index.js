var express = require("express");
//const router = express.Router();
var signUp = require("../Modules/Signup/signcontroller");

var responses = require("../Modules/Login/controller");

var errorRoute = require("./../Modules/errorHandling/errorRoute")

// router.post('/create/user/', signUp.savemodel);

// router.post('/post/login/', responses.logIn);

// module.exports = router;

exports.initialize = (app) => {
    app.use('/user/', signUp);
    app.use('/login/', responses);
    app.use('/error/', errorRoute);
}