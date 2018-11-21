var express = require("express");
const router = express.Router();

var signUp = require("./signcontroller");


router.post('/create/user/', signUp.savemodel);

module.exports = router;