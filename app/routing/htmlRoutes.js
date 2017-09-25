//dependencies
var path = require("path");

//routing
module.exports = function(app){
	app.get("/", function(req, res){
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});

	app.get("/survey", function(req, res){
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});

	//if no matching route found, send to home
	app.get("/survey", function(req, res){
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});
};