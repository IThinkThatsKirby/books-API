// the dependencies
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors')


//middleware
require("dotenv").config();
const PORT = process.env.PORT;
app.use(express.json());
app.use(cors())

//
mongoose.connect(
	process.env.MONGO_URI,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => {
		console.log("connected to mongo on: ", process.env.MONGO_URI)
	}
);

// root index
app.get("/", (req, res) => {
	res.send("this is the landing page");
});

// books tho.
const booksController = require("./controllers/booksController.js");
app.use("/books", booksController);

// does it work check?
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
