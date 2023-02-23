const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    ISBN:{
        type: String,
        required: true,
        unique: true,
    },
    Name:{
        type: String,
        required:true,
    },
    Author:{
        type: String,
        required:true,
    },
    Available:{
        type: Boolean,
        required:true,
    }
},{timestamps:true});

module.exports = mongoose.model('Book',bookSchema);