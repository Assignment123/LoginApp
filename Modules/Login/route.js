var express = require("express");
const router = express.Router();

var responses = require("./controller");

router.post('/login', responses.logIn);
module.exports = router;