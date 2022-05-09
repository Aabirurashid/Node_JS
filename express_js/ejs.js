var express = require('express');
var path=require('path')
var app = express();

const staticpath=path.join(__dirname+'../public')

app.set('view engine', 'ejs');
app.use(express.static(staticpath))

app.get('/', function(req, res){
   res.send('Hello for the express server')

});

app.get('/', function(req, res){
   res.render('index')

});




app.listen(6000);
