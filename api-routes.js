const router = require("espress").Router();

app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname, "public", "index.js"));
});
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "public", "notes.html"));
});



module.exports = router