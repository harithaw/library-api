const Lend = require('../models/lends.model.js')
//const mongoose = require('mongoose')

//all lends
const getLends = async(req,res)=>{
    const lends = await Lend.find({})

    res.status(200).json(lends)
}

//create new lend
const createLend = async(req,res)=>{
    const {ISBN, username, date} = req.body 

    // add new doc to db
    try{
        const lend = await Lend.create({ISBN, username, date})
        res.status(200).json(lend)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports={
    getLends,
    createLend
}