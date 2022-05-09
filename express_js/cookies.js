var express=require('express')
var cookieParser=require('cookie-parser')
var app=express()
app.use(cookieParser())

app.get('/sett',(req,res)=>{
    // res.cookie('username','Rashid',)//{expires:Date.now()+360000}).send("date set")
    res.cookie('user','moomin',{
        // maxAge:2000,
        // expires:new Date('03 march 2022')
        // httpOnly:true
        // secure:true
        // domain:'example.com'
        
    })
    res.send("cookie has been sent...")
})
app.get('/show',(req,res)=>{
    console.log(req.cookies)
    res.send(req.cookies);
})
app.get('/delete',(req,res)=>{
    res.clearCookie('username').send("cookie has been deleted");
})
app.listen(5000,()=>{
    console.log("port is starting")
});
