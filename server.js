// Dependencies and express app setup
const express = require("express");
const htmlRoutes = require("./html-routes");
const app = express();
const PORT = 3000;

// Allows express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(htmlRoutes);


app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));