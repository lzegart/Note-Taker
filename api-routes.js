const router = require("express").Router();

router.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname, "public", "index.js"));
});
router.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "public", "notes.html"));
});



module.exports = router