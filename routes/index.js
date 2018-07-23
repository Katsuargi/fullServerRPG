const router = require('express').Router();
const path = require("path");
const jsonParser = require('body-parser').json;
let Character = require('../models');
// let Monster = require('../models');

router.use(jsonParser());

router.get('/', (req, res) =>{
	res.sendFile(path.join(__dirname, '../index.html'));
});

router.post('/savep', (req, res) =>{
	console.log("Saved!");
	console.log(req.body);
	const playerChar = new Character(req.body);
	console.log(playerChar);
	playerChar.save((err, playerChar) =>{
		if(err) return next(err);
		res.status(201);
		res.json(playerChar);
	});
});

router.put('/updatep', (req, res) =>{
	console.log("Updated!");
	console.log(req.body);
	console.log(req.body.saveCode);
	Character.findOneAndUpdate(
		{saveCode: req.body.saveCode}, 
		req.body, 
		{new: true}, 
		(err, Character) => {
			if (err) return res.status(500).send(err);
	        return res.send(Character);
    });
});

router.put('/saveMon', (req, res) =>{
	console.log("Updated!");
	console.log(req.body);
	console.log(req.body.monName);
	Monster.findOneAndUpdate(
		{name: req.body.mon.name}, 
		req.body, 
		{upsert: true}, 
		(err, Character) => {
			if (err) return res.status(500).send(err);
	        return res.send(Character);
    });
});

router.get('/loadp/:loadid', (req, res) =>{
	console.log(req.params.loadid);
	Character.findOne({saveCode: req.params.loadid}, function (err, Character) {
  		if (err) return console.error(err);
  		console.log(Character);
  		res.json(Character);
	});
});

router.post('/deletep', (req, res) =>{
	Character.deleteOne({saveCode: req.body.save}, function (err, Character) {
  		if (err) return console.error(err);
  		console.log(Character);
	});
});

module.exports = router;