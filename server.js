const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const config = require("./Modules/Config/config");
const routerHelp = require("./Routes/index");
const errorHandling = require("./Modules/errorHandling/errorController")


mongoose.connect(config.database);

mongoose.connection.once('open', function () {
    console.log('Connection has been made')
}).on('error', function () {
    console.log("Connection error:", error);
})

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));

//app.use('/api/', route);
routerHelp.initialize(app);

app.use(function(err, req, res, next) {
    errorHandling.posting(err, req, res, next);
})

app.listen(8000, () => {
    console.log('Server is up and running');
});