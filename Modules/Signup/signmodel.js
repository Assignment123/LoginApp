const config = require("./Modules/Config/config");

const mongoose = require('mongoose');

mongoose.connect(config.database);

const Schema1 = new mongoose.Schema({
    firstName: {type: String, required: true, max: 30},
    lastName: {type: String, required: true, max: 30},
    email: {type:String, unique: true, required: true},
    userName:{type:String, unique:true, required: true},
    passWord:{type:String, required: true},
    updateDone:{type:Date, default: Date.now},
    dateAdded:{type:Date, default: Date.now},
    is_deleted: {type: Boolean,default: false}
});
const Table = mongoose.model('Table', Schema1);
module.exports =Table;
