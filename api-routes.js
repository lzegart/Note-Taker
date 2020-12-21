const router = require("express").Router();
const path = require("path");

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});
router.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "public", "notes.html"));
});

router.post("/api/notes", function(req, res) {
    console.log(req.body);
    res.send(200)
});


module.exports = router