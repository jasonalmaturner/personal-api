// 'use strict';

var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var port = 9002;

var server = app.listen(port, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('personal-api app listening at http://%s:%s', host, port);
});

var me = {
	name: 'Jason Alma Turner',
	location: 'Provo, Utah',
	hobbies: ['slalom water skiing', 'cross-country skiing', 'music', 'cooking'],
	occupations: ['banker (operations support clerk)', 'agricultural laborer', 'administrative assistant', 'horticultural applicator',],
	mentions: ['http://www.facebook.com/jasonalmaturner', 'https://twitter.com/jasonalmaturner', 'https://github.com/jasonalmaturner'],
	references: ['Valrie Scott', 'Barbara Taylor', 'Dana Diedrich'],
	skillz: [
		{
			id: 1,
			name: 'Javascript',
			experience: 'Intermediate'
		},
		{
			id: 2,
			name: 'Minitab',
			experience: 'Over 9000'
		}
	] 
}

app.use(bodyParser());
app.use(cors());

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

app.get('/occupations/:order', function(req, res){
	order(me.occupations);
	if(req.params.order === 'ordered'){
		res.status(200).send(JSON.stringify(orderedArray))
	}
	else if(req.params.order === 'reversed'){
		res.status(200).send(JSON.stringify(orderedArray.reverse()))
	}
	else if(req.params.order === 'latest'){
		res.status(200).send(JSON.stringify(me.occupations[me.occupations.length - 1]));
	}
	else {
		res.status(200).send(JSON.stringify(me.occupations));
	}
})

app.put('/location', function(req, res){
	me.location = req.body.location;
	res.status(200).send(JSON.stringify(req.body.location + ' put'))
})

app.get('/mentions', function(req, res){
	res.status(200).send(JSON.stringify(me.mentions));
})

app.post('/mentions', function(req, res){
	me.mentions.push(req.body.mentions);
	res.send(JSON.stringify(req.body.mentions + ' posted'))
})

app.get('/references', function(req, res){
	res.status(200).send(JSON.stringify(me.references));
})

app.post('/references', function(req, res){
	me.references.push(req.body.references);
	res.send(JSON.stringify(req.body.references + ' posted'))
})

app.get('/skillz', function(req, res){
	res.status(200).send(JSON.stringify(me.skillz));
})

app.post('/skillz', function(req, res){
	req.body.id = me.skillz.length + 1;
	me.skillz.push(req.body);
	res.send(JSON.stringify(req.body.references + ' posted'))
})

// app.get('/skillz?experience=:level', function(req, res){
// 	res.status(200).send(JSON.stringify(me.skillz));
// })

var orderedArray = [];

var order = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        orderedArray[i] = arr[i].toLowerCase();
        orderedArray.sort();
    }
};