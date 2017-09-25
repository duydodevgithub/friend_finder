//dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use(express.static('public'));
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});