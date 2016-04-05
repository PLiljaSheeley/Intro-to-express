var express = require('express');
	app = express();
var path = require('path');

app.listen(3000, function(){
  console.log("Hello World");
});


app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, './index.html'));
});