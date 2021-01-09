// Dependencies and express app setup
const express = require("express");
const htmlRoutes = require("./html-routes");
const apiRoutes = require("./api-routes");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(htmlRoutes);
app.use(apiRoutes);


app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));