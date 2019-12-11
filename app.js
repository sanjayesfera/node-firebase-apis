var express = require("express");
var bodyParser = require("body-parser");
var router = require("./routes.js");

var app = express();
app.use(bodyParser.json()); //need to parse HTTP request body

app.use("/",router);

module.exports = app;
