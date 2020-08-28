var mongoose = require('mongoose');
var Schema = mongoose.Schema
const user = new Schema({
    firstName: {
        type: String
    },
    lastName:{
        type:String
    },
    emailID: {
        type: String
    },
    contactNo: {
        type: String
    },
    image: {
        type: String
    },
    created_Date: {
        type: Date,
        default: Date.now

    }
}, { strict: false });
module.exports = user;