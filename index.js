// the dependencies
const express = require("express");
const app = express();


//middleware
require("dotenv").config();
const PORT = process.env.PORT;
app.use(express.json());


// does it work check?
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));


// root index
app.get("/", (req, res) => {
    res.send('this is the landing page')
})

// books tho.