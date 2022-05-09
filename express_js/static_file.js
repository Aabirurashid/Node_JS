var express=require('express')
var app=express()
app.use(express.static(__dirname+'/public'))
app.get('/user',function(req,res){
    res.send("welcome to home page")
})
app.listen(4000)