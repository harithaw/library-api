const express = require('express')

const {
    getLends,
    createLend
} = require('../controller/LendController')


const router = express.Router()

//get all lends
router.get('/',getLends)

//create lend
router.post('/add',createLend)


module.exports = router;