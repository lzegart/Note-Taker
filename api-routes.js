const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

router.get("/api/notes", function(req, res) {
    fs.readFile(path.join(__dirname, "db", "db.json"), "utf8", function(err, data) {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
});

router.post("/api/notes", function(req, res) {
    // console.log("1");
    fs.readFile(path.join(__dirname, "db", "db.json"), "utf8", function(err, data) {
        if (err) throw err;
        const newNote = JSON.parse(data);
        console.log(req.body);
        // console.log("2");
        const id = uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
        newNote.push({
            title: req.body.title,
            text: req.body.text,
            id: id,
        });
        fs.writeFile(path.join(__dirname, "db", "db.json"), JSON.stringify(newNote), function(err, data) {
            if (err) throw err;
            // console.log("3");
            console.log("Success!");
            res.sendStatus(200);
        });
    });
    // console.log("4");
});

router.delete("/api/notes/:id", function(req, res) {
    console.log(req.params.id);
     fs.readFile(path.join(__dirname, "db", "db.json"), "utf8", function(err, data) {
         if (err) throw err;
         const savedNotes = JSON.parse(data);
         const newArray = [];
         for (let note of savedNotes) {
             console.log(note);
             console.log(note.id === req.params.id);
             if (note.id !== req.params.id) {
                newArray.push(note);
             }
             
         }
         console.log(newArray);
         fs.writeFile(path.join(__dirname, "db", "db.json"), JSON.stringify(newArray), function(err, data) {
            if (err) throw err;
            console.log("Success!");
            res.sendStatus(200);
        });
    });
});


module.exports = router