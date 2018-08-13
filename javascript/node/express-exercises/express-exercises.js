
// Hello World

var express = require('express');
var app = express();

app.listen(8000, function () {
    console.log('Listening on port 8000');
  });

app.get('/', function (request, response) {
  response.send('Hello World!');
});


// Routes

app.get('/cats', function (request, response) {
    response.send('Meow!');
});

app.get('/dogs', function (request, response) {
    response.send('Bork!');
});

app.get('/cats_and_dogs', function (request, response) {
    response.send('Living together!');
});


// Route Parameters

app.get('/greet/:name', function (request, response) {
    var name = request.param('name');
    response.send(`Hello ${name}`);
});

//or
// app.get('/greet/:name', function (request, response) {
//     var name = request.params.name;
//     response.send(`Hello ${name}`);
// });

//Query parameter: tell the year you were born

app.get('/age/:age', function (request, response) {
    var age = request.param('age');
    response.send(`You were born in ${2018 - age}`);
});



