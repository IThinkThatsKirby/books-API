// Dependencies
const express = require("express");
const books = express.Router();
const Book = require("../models/book");
console.log(books);
// books.get("/seed", (req, res) => {
// 	Book.insertMany([
// 		{
// 			title: "The Shinobi Initiative",
// 			description:
// 				"The reality-bending adventures of a clandestine service agency in the year 2166",
// 			year: 2014,
// 			quantity: 10,
// 			imageURL: "https://imgur.com/LEqsHy5.jpeg",
// 		},
// 		{
// 			title: "Tess the Wonder Dog",
// 			description: "The tale of a dog who gets super powers",
// 			year: 2007,
// 			quantity: 3,
// 			imageURL: "https://imgur.com/cEJmGKV.jpg",
// 		},
// 		{
// 			title: "The Annals of Arathrae",
// 			description:
// 				"This anthology tells the intertwined narratives of six fairy tales.",
// 			year: 2016,
// 			quantity: 8,
// 			imageURL: "https://imgur.com/VGyUtrr.jpeg",
// 		},
// 		{
// 			title: "WARP",
// 			description:
// 				"A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
// 			year: 2010,
// 			quantity: 4,
// 			imageURL: "https://imgur.com/qYLKtPH.jpeg",
// 		},
// 	])
// 		.then(
// 			res.status(200).json({
// 				message: "Seed successful",
// 			})
// 		)
// 		.catch(
// 			res.status(400).json({
// 				message: "Seed unsuccessful",
// 			})
// 		);
// });
//index
books.get("/", (req, res) => {
	console.log(req.params.id);
	Book.find()
		.then((foundBooks) => {
			res.status(200).json(foundBooks);
		})
		.catch((err) => {
			res.status(400).json({
				message: `an error has occurred while getting all books: ${err.message}`,
			});
		});
});
//show indevidual books
books.get("/:id", (req, res) => {
	console.log(req.body);
	Book.findById(req.params.id)
		.then((findedbook) => {
			console.log(req.body);
			res.status(200).json(findedbook);
		})
		.catch((err) => {
			res.status(400).json({
				message: `an error has occurred while getting the one book: ${err.message}`,
			});
		});
});

// posting
books.put("/:id", (req, res) => {
	console.log(req.params);
	Book.findByIdAndUpdate(req.params.id, req.body)
		.then((editedBook) => {
			console.log(req.body);
			res.status(200).json(editedBook);
		})
		.catch((err) => {
			res.status(400).json({
				message: `an error has occurred while updating the one book: ${err.message}`,
			});
		});
});
//delete the book
books.delete('/:id'), (req, res) => {
	Book.findByIdAndDelete(req.param.id).then(deletedBook => {
		res.status(200).json({message: its gone});
	}).catch((err) => {
		res.status(400).json({message: `an error has occurred while deleting the`})
	})
}
// create
books.post('/',(req,res) => {
	Book.create(req.body).then(newBook => {
		res.status(200).json(newBook)
	}).catch(err =>{
		res.status(400).json({message: 'an error happend you kant make the book'})
	})
})
//export
module.exports = books;
