// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
// Sets up the Express App
// =============================================================
const app = express();
const PORT = 3001;


// Routes
// =============================================================
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
});

app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "./app/public/survey.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });