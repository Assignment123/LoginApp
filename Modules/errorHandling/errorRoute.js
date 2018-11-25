var express = require("express"),
    router = express.Router(),
    errorController = require("./errorController");
    
router.get('/error',errorController.getAll);

module.exports = router;


