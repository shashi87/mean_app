var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/itsdamstask_db', ['tasks']);

// Get All tasks
router.get('/tasks', function(req, res, next) {

	db.tasks.find( function(err, tasks) {
		if(err) {
			res.send(err);
		} else {
			res.json(tasks);
		}
	});
});

// Get single task based on id
router.get('/task/:id', function(req, res, next) {

	var objId = mongojs.ObjectId(req.params.id);
	db.tasks.findOne({_id:objId} , function(err, task) {
		console.log("err " + err);
		console.log("task " + task);
		if(err) {
			res.send(err);
		} else {
			res.json(task);
		}
	});

});

// Save task - POST op
router.post('/task', function(req, res, next) {
	var task = req.body;
	if(!task.title || !(task.isDone + '')) {
		res.status(400);
		res.json({
			"error": "Invalid data"
		});
	} else {
		db.tasks.save(task, function(err, task) {
			if(err) {
				res.send(err);
			} else {
				res.json(task);
			}
		});
	}
});


// Register user - POST op
router.post('/users', function(req, res, next) {
	var user = req.body;
	if(!user.firstName || !(user.lastName)) {
		res.status(400);
		res.json({
			"error": "Invalid data"
		});
	} else {
		db.users.save(user, function(err, user) {
			if(err) {
				res.send(err);
			} else {
				res.json(user);
			}
		});
	}
});

// Save task - POST op
router.post('/authenticate', function(req, res, next) {
	var task = req.body;
	if(!task.title || !(task.isDone + '')) {
		res.status(400);
		res.json({
			"error": "Invalid data"
		});
	} else {
		db.tasks.save(task, function(err, task) {
			if(err) {
				res.send(err);
			} else {
				res.json(task);
			}
		});
	}
});

// Delete task
router.delete('/task/:id', function(req, res, next) {
	var objId = mongojs.ObjectId(req.params.id);
	db.tasks.remove({_id:objId} , function(err, task) {
		if(err) {
			res.send(err);
		} else {
			res.json(task);
		}
	});
});

// Update task
router.put('/task/:id', function(req, res, next) {
	var task = req.body;
	var updTask = {};

	if(task.isDone) {
		updTask.isDone = task.isDone;
	}

	if(task.title) {
		updTask.title = task.title;
	}

	if(!updTask) {
		res.status(400);
		res.json({
			"error": "Invalid data"
		});
	} else {
		var objId = mongojs.ObjectId(req.params.id);
		db.tasks.update({_id:objId}, updTask, {}, function(err, task) {
			if(err) {
				res.send(err);
			} else {
				res.json(task);
			}
		});
	}
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