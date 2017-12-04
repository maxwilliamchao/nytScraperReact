// Set up ======================================================
var express    = require("express");
var bodyParser = require("body-parser");
var logging    = require("morgan");
var mongoose   = require("mongoose");
var axios      = require("axios");


var PORT = process.env.PORT || 8000;


// Configuration ==============================================

var app = express();

var db  = require("./models");

app.use(logging("dev"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/nytApp", {
  useMongoClient: true
});

// Routes ======================================================

// get all articles current search

// get all articles
app.GET("/article/saved", function(req, res){
  db.Article
  .find({})
  .sort({createdAt:-1})
  .then(function(res){
  	// send to front end
  	res.json(res);
  })
  .catch(function(err) {
    res.json(err);
  });
  
});

// add an article
app.POST("/article/saved", function(req, res){
	 db.Article
	 .create()
	 .then()
	 .catch(function(err) {
    res.json(err);
  });
});

// get current search




// delete an article
app.DELETE("/article/:id", function(req, res){
	db.Article
	.find({ id: })
	.remove()
	.then()
	.catch(function(err) {
    res.json(err);
  });
});

app.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
});
