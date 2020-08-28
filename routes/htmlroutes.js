
var router =require("express").Router();
var path =require("path");

router.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

router.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;


// var path = require("path");

// module.exports = function(app) {
   
//     app.get("/notes", function(req, res) {
//       res.sendFile(path.join(__dirname, "../public/notes.html"));
//     });
  
 
//     app.get("*", function(req, res) {
//       res.sendFile(path.join(__dirname, "../public/index.html"));
//     });
//   };
  