'use strict';

var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var port = 9002

var me = {
	name: 'Jason Alma Turner',
	location: 'Provo, Utah',
	hobbies: ['slalom water skiing', 'cross-country skiing', 'music', 'cooking'],
	occupations: ['banker (operations support clerk)', 'agricultural laborer', 'administrative assistant', 'horticultural applicator',]
}

app.use(cors());
app.use(bodyParser());

var server = app.listen(port, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('personal-api app listening at http://%s:%s', host, port);
})

app.get('/name', function(req, res){
	res.status(200).send(JSON.stringify(me.name));
})

app.get('/location', function(req, res){
	res.status(200).send(JSON.stringify(me.location));
})

app.get('/hobbies', function(req, res){
	res.status(200).send(JSON.stringify(me.hobbies));
})

app.get('/occupations', function(req, res){
	res.status(200).send(JSON.stringify(me.occupations));
})

app.get('/occupations:order', function(req, res){
	var occupationsCopy = me.occupations.slice();
	var orderedArray = [];
	for(var i = 0; i < me.occupations.length; i++){

	}
	if(req.params.order === 'ordered'){
		res.status(200).send(JSON.stringify())
	}
})

app.get('/occupations/latest', function(req, res){
	res.status(200).send(JSON.stringify(me.occupations[occupations.length - 1]));
})

app.put('/location', function(req, res){
	me.location = req.body.location;
	res.send(JSON.stringify(req.body.location + ' put'))
})



// var orderedArray = [];

// var order = function (arr) {
//     debugger;
//     for (var i = 0; i < arr.length; i++) {
//         orderedArray = arr[i].tolowerCase();
//     }
// };
// order(occupations);
// console.log(orderedArray);