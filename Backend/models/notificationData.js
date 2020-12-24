var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ikureUserNotification = new Schema({
    oldCount: { type: Number, required: true },
    newData: { type: Array, required: true } 
})

module.exports = mongoose.model('ikureUserNotification', ikureUserNotification)