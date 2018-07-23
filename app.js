const express = require('express');
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const router = require('./routes');

mongoose.connect("mongodb://localhost:27017/RPG");
const db = mongoose.connection;

db.on("error", function(err){
	console.error("connection error:", err);
});

db.once("open", function(){
	console.log("db connection successful");
});

app.use('/', router);

app.use(express.static('public'));

app.listen(8000, () => {
	console.log('The application is listening on port 8000.');
});