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
    Avalible:{
        type: Boolean,
        required:true,
    }
},{timestamps:true});

module.export = mongoose.model('Book',bookSchema);