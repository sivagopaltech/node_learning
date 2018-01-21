const express = require('express');
const hbs = require("hbs");

var app = express();
app.set("view engine","hbs");
hbs.registerPartials(__dirname+"/views/partials")

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
})

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
})

app.use(express.static(__dirname+"/public/"));
app.get("/", (req, res) => {
    // res.send("<h1>Hello express</h1>");
    res.render('home.hbs', {
        pageTitle: "Welcome Page",
        welcomeMessage: "Welcome to home page"
    })
});

app.get("/about", (req, res) => {
    res.render("about.hbs", {
        pageTitle: "About Page"
    });
});

app.get("/bad", (req, res) => {
    res.send("Page not found!");
});
app.listen(3000, () => {
    console.log("Server is up on port 3000");
});