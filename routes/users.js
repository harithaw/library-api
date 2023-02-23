const express = require('express')

const {
    getUser,
    getUsers,
    createUser
} = require('../controller/UserController')


const router = express.Router()

//get all users
router.get('/',getUsers)

//get user
router.get('/:username',getUser)

//create user
router.post('/add',createUser)


module.exports=router;