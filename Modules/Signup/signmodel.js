const mongoose = require('mongoose');

mongoose.connect('mongodb://sudrishya:sudrishya123@ds125272.mlab.com:25272/login');

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
