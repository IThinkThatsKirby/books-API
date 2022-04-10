// the dependencies
const express = require("express");
const app = express();
const mongoose = require("mongoose");

//middleware
require("dotenv").config();
const PORT = process.env.PORT;
app.use(express.json());

// root index
app.get("/", (req, res) => {
	res.send("this is the landing page");
});

// books tho.
const booksController = require("./controllers/booksController.js");
app.use("/books", booksController);

// does it work check?
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));