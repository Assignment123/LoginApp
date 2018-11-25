const config = require("./Modules/Config/config");
const mongoose = require('mongoose');

mongoose.connect(config.database);
 
const Schema2 = new mongoose.Schema({
    messageErr: String,
    dateadded: {type:Date, default: Date.now()}
   
});

const Table2 = mongoose.model('Table2', Schema2);
module.exports = Table2;
