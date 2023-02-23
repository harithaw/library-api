const express = require('express')

const {
    getBook,
    getBooks,
    createBook,
    updateBook
} = require('../controller/BookCotroller')


const router = express.Router()

//get all books
router.get('/',getBooks)

//get book
router.get('/:isbn',getBook)

//create book
router.post('/add',createBook)

//update book
router.patch('/update/:isbn',updateBook)


module.exports=router;