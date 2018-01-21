const express = require('express');

var app = express();

app.use(express.static(__dirname+"/public/"));
app.get("/", (req, res) => {
    // res.send("<h1>Hello express</h1>");
    res.send({
        name: "siva",
        age:28
    })
});

app.get("/about", (req, res) => {
    res.send("Abot page");
});

app.get("/bad", (req, res) => {
    res.send("Page not found!");
});
app.listen(3000, () => {
    console.log("Server is up on port 3000");
});