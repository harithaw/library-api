const User = require('../models/users.model.js')
//const mongoose = require('mongoose')

//all users
const getUsers = async(req,res)=>{
    const users = await User.find({})

    res.status(200).json(users)
}

//get single user
const getUser = async(req,res)=>{
    const {username} = req.params

    const user = await User.find({username})

    if(!user){
        return res.status(404).json({error:'User not found'})
    }

    res.status(200).json(user)
}

//create new user
const createUser = async(req,res)=>{
    const {username, name, password} = req.body 

    // add new doc to db
    try{
        const user = await User.create({username, name, password})
        res.status(200).json(user)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports={
    getUser,
    getUsers,
    createUser
}