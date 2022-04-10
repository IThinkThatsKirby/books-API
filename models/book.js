//dependencies
const mongoose = require("mongoose");
const { Schema } = mongoose;

//dat Schema
let bookSchema = new Schema({
	title: { type: String },
	description: { type: String },
	year: { type: Number },
	quantity: { type: Number },
	imagURL: { type: String },
});

// export and model
const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
