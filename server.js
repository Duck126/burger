const express = require("express");
const parser = require("body-parser");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

app.use(parser.urlencoded({ extended: false}));

app.use(parser.json());

var exhb = require("express-handlebars");

app.engine("handlebars", exhb({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function(){
    console.log("Burger Joint listening on PORT: " + PORT);
});