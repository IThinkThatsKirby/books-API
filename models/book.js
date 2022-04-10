//dependencies
const mongoose = require("mongoose");
const { Schema } = mongoose

//dat Scheema
const bookSchema = new Schema({
	title: String,
	description: String,
	year: Number,
	quantity: Number,
	imagURL: String,
});

// export and model
const Book = mongoose.model('Book', bookSchema)
module.exports = Book