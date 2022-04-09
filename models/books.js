//dependencies
const mongoose = require("mongoose");
const { Schema } = mongoose.model;

//dat Scheema
const bookSchema = new Schema({
	title: string,
	description: string,
	year: number,
	quantity: number,
	imagURL: string,
});

// export and model
const Book = mongoose.model("Book", bookSchema);
module.exports = Book;