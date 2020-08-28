var router =require("express").Router();
var notes = require("../db/notes.js");

router.get("/notes", function(req, res){
    notes.getNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
});

router.post("/notes", function(req, res){
    notes.addNotes(req.body)
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
});

router.delete("/notes/:id", function(req, res){
    notes.removeNote(req.params.id)
    .then(() => res.json({ok: true}))
    .catch(err => res.status(500).json(err));
});

module.exports = router; 



// var path = require("path");
// var fs = require("fs"); 

// module.exports = function(app) {
//     app.get("/api/notes`", function(req, res) {
//     //    using res.json pass data from readFile, displaying current notes 
//       });

//     //   post will handle getting in new notes
// }
