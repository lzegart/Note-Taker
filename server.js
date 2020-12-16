// Dependencies
const express = require("express");
const path = require("path");

// Express app setup
const app = express();
const port = 3000;

// Allows express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Data

// Routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public", "index.js"));
});
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "public", "notes.html"));
});

