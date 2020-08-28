var express = require("express");
var apiRoute = require("./routes/apiroutes.js");
var htmlRoute = require("./routes/htmlroutes.js");

// express up setup
var app = express();
var PORT = process.env.PORT || 8080;

//  Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"))


app.use("/api", apiRoute);
app.use("/", htmlRoute);

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });


  // require("./routes/apiroutes")(app);
// require("./routes/htmlroutes")(app);
