
const express=require('express')
const app=express();
const middlewere=(req,res,next)=>{
    if (!req.query.age){
        res.send("please provide age")
    }
    else if(req.query.age<18){
        res.send("you can not acess")
    }
    else{
        next()
    }
}
app.use(middlewere)
app.get("/",(req,res)=>{
  res.send("Welcome to Home page")
})
app.get("/users",(req,res)=>{
    res.send("Welcome to user page")
  })
app.listen(3000)