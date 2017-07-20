var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var mongoose = require('mongoose');
var Task = require('./models/todoListModel');
var bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/todoListRoutes');
routes(app);

app.listen(port, function () {
  console.log('Todo list RESTful API server started on: ', port);
});

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});
