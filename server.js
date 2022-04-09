// the dependencies
const express = require("express");
const app = express();
const mongoose = require("mongoose");

//middleware
require("dotenv").config();
const PORT = process.env.PORT;
app.use(express.json());

// does it work check?


// root index
app.get("/", (req, res) => {
	res.send("this is the landing page");
});

// books tho.

const booksController = require("./controllers/booksController");
app.use("/books", booksController);


app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));