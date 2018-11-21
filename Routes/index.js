var express = require("express");
const router = express.Router();
var responses = require("../Modules/Login/controller");


var signUp = require("./../Modules/Signup/signcontroller");

router.post('/create/user/', signUp.savemodel);

router.post('/post/login/', responses.logIn);

module.exports = router;