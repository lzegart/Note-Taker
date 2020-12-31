const router = require("express").Router();
const path = require("path");
const fs = require("fs");

router.get("/api/notes", function(req, res) {
    fs.readFile(path.join(__dirname, "db", "db.json"), "utf8", function(err, data) {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
});

router.post("/api/notes", function(req, res) {
    fs.readFile(path.join(__dirname, "db", "db.json"), "utf8", function(err, data) {
        if (err) throw err;
        const newNote = JSON.parse(data);
        newNote.push({
            title: req.body.title,
            text: req.body.text,
            id: id,
        });
    });
    
    console.log(req.body);
    res.send(200);
});

//        router.post should read file (db.json) to see what's there 
// add new note to array that was read
// write new array to db.json
// ? before adding to array, add id to note (can get randomly generated id)
// 

module.exports = router