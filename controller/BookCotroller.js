const Book = require('../models/books.model.js')
//const mongoose = require('mongoose')

//all books
const getBooks = async(req,res)=>{
    const books =await Book.find({})

    res.status(200).json(books)
}

//get single book

const getBook = async(req,res)=>{
    const {isbn} = req.params

    const book = await Book.find({ISBN:isbn})

    if(!book){
        return res.status(404).json({error:'Book not found'})
    }

    res.status(200).json(book)
}

//create new book

const createBook = async(req,res)=>{
    const ISBN = req.body.ISBN;
    const Name = req.body.Name;
    const Author = req.body.Author;
    const Available = req.body.Available;

    // add new doc to db
    try{
        const book = await Book.create({ISBN,Name,Author,Available})
        res.status(200).json(book)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}


//update book
const updateBook = async(req,res)=>{
    const {isbn} = req.params

    const book = await Book.findOneAndUpdate({ISBN:isbn},{
        ...req.body
    })

    if (!book){
        return res.status(404).json({error:'No such book'})
    }

    res.status(200).json(book)
}

module.exports={
    getBook,
    getBooks,
    createBook,
    updateBook
}