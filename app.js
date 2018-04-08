var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');
app.use('/styles', express.static('styles'));

//Route and display home page
app.get('/', function(req, res){
  res.render('index');
});

//Route and display contacts page
app.get('/contact', function(req, res){
  res.render('contact', {qs: req.query});
});

//Route and display robot control UI
app.get('/robot1', function(req, res){
  res.sendFile(path.join(__dirname+'\\robot1.html'));
});

//Set up port 3000 as gateway for server
app.listen(3000);
