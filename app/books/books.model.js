const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    Author:{
        type:String,
        required:true,
    }
});

/**
 * @typedef User
 */
module.exports = mongoose.model('Book', BookSchema);