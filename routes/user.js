var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var jwt = require('./jwt');
var db = mongojs('mongodb://localhost:27017/itsdamstask_db', ['users']);




// Save task - POST op
router.post('/authenticate', function(req, res, next) {
	var user = req.body;
	
	if(!user.username) {
		res.status(400);
		res.json({
			"error": "Invalid data"
		});
	} else {
		db.users.find({username:user.username}, function(err, result) {
			if(err) {
				res.send(err);
			} else {
				var token = jwt.create("shashi123",result);
				var resUsername=resPassword="";
				console.log(result)
				if(result.length>0){
						resUsername=result[0].username;
						resPassword=result[0].password;

				}	

				var response = {username:resUsername,password:resPassword,token:token};
				res.send(response);
			}
		});
	}
	
	
});

router.post('/register', function(req, res, next) {
	res.send("Register Works");
});

module.exports = router;
/*

// ### Using MongoClient ###
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
var url = 'mongodb://localhost:27017/itsdamstask_db';


	MongoClient.connect(url, function(err, db) {
  		assert.equal(null, err);
  		var col = db.collection('tasks');
  		col.find().toArray().then(function(tasks) {
			res.json(tasks);
			db.close();
	    });
	});


	MongoClient.connect(url, function(err, db) {
  		assert.equal(null, err);
  		var col = db.collection('tasks');
  		var objId = mongojs.ObjectId(req.params.id);
  		col.findOne({_id:objId}).then(function(task) {
			res.json(task);
			db.close();
	    });
	});



// ## using mongojs ###
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/itsdamstask_db', ['tasks']);

	db.tasks.find( function(err, tasks) {
		console.log("err " + err);
		console.log("tasks " + tasks);
		if(err) {
			res.send(err);
		} else {
			res.json(tasks);
		}
	});

*/