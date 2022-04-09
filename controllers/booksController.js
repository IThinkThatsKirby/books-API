// Dependencies
const express = require('express');
const books = express.Router()
const Book = require('../models/books.js')

//index
books.get('/:id', (req, res) =>{
    Book.find()
    .then(foundBooks => {
        res.status(200).json(foundBooks)
    })
    .catch(err => {
        res.status(400).json({
            message: `an error has occurred while getting all books: ${err.message}`
        })
    })
})