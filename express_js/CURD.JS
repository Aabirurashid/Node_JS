var express = require('express');
var bodyParser = require('body-parser');
var usersRoutes=require ('./routes/users.js' )
var app=express();
const PORT=5000;

// var urlencodedParser=bodyParser.urlencoded({extended:false})
app.use(bodyParser.json());
app.use('/users',usersRoutes)


app.get('/',function(req,res){
    res.send("Hello From Home Page")
})

app.get("/",function(req,res){
    // console.log('[TEST]')
    res.send("Hello From Home Page")
})



app.listen(PORT,()=>{
    console.log(`server running on port:http://localhost${PORT}`)
})
