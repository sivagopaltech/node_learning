const express = require('express');
const hbs = require("hbs");
const fs = require('fs');

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

app.use((req, res, next) => {
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.path}`;
    fs.appendFile('server.log', log+"\n", (err) => {
        if(err) {
            console.log("unable log");
        }
    });
    res.render('maintainance.hbs');
    // next();
})
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