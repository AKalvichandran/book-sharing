const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    mobileNumber:{
        type:String,
        required:true,
    },
    countryCode : {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    address1: {
        type:String,
        required:true
    },
    address2: {
        type:String,
        required:false
    },
    city:{
        type: String,
        required:true
    },
    postalCode: {
        type: String,
        required:true
    },
    country: {
        type: String,
        required:true
    }
});

/**
 * @typedef User
 */
module.exports = mongoose.model('User', UserSchema);