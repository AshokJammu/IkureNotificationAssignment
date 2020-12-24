var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ikureUserRegistration = new Schema({
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    age: { type: Number, required: true },
    email:{type: String, required: true},
    password: { type: String, required: true },
    company:{type:String, required:true},
    userType:{type:String,required:true},
    message:{type:String,required:true},
    createdAt:{type:Date,required:true}

})

module.exports = mongoose.model('ikureUserRegistration', ikureUserRegistration)