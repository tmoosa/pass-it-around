const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (request, response) => {
    response.send("<h1>99 bottles of pills on the wall</h1><br/><a href='/98'>Take one down, pass it around</a>");
});

app.get("/:number_of_bottles", (req, res) => {
    const numberOfBottles = parseInt(req.params.number_of_bottles);

    if (numberOfBottles > 0) {
        res.send(`${numberOfBottles} Bottles of pills on the wall <br/><a href='/${numberOfBottles - 1}'>Take one down, pass it around</a>`);
    } else {
        res.send("<h1>0 bottle of pills on the wall</h1><br/><a href='/'>Start Over</a>");
    }
});

app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`);
});
