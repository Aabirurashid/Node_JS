var express = require('express');
var app = express();

app.get('/:id', function(req, res){
   res.send('The id you specified is ' + req.params.id);
});
app.get('/:course_name/courses/:id', function(req, res){
    res.send('course_name'+req.params.course_name+"ID"+req.params.id);
 });
 app.get('/messsage/:phone_no([0-9]{10})', function(req, res){
    res.send('message to'+req.params.phone_no);
 });
 app.get('*', function(req, res){
    res.send('page not found');
 });
app.listen(8000);


