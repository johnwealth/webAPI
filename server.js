var express = require('express');
var app = express();

var PORT = process.env.PORT||3000;

app.get('/', function(req, res){

});

app.get('/content', function(req, res){

	res.send('/content');

});

app.use(express.static(__dirname + '/public'));


app.listen(3000, function(){

  console.log('express server started on localhost:' + PORT );

});