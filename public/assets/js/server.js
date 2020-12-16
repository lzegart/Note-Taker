// Dependencies
var express = require("express");
var path = require("path");

// Express app setup
vap app = express();
var port = 3000;

// Allows express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Data:
