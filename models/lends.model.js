const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lendsSchema = new Schema({
    ISBN:{
        type: String,
        required: true,
    },
    username:{
        type: String,
        required:true,
    },
    date:{
        type: Date,
        required: true,
    }
},{timestamps:true});

module.exports = mongoose.model('Lend',lendsSchema);