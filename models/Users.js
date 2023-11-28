const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    UserName : {type : String},
    Password : {type : String},
    Email : {type : String},
    ContactNumber : {type : Number},
    CreatedDate : {type : Date , default : Date.now}
});

module.exports = mongoose.model("Users",UserSchema);