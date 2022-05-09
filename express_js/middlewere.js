// const express=require('express')
// const app=express();
// const middlewere=(req,res,next)=>{
//     if (!req.query.age){
//         res.send("please provide age")
//     }
//     else if(req.query.age<18){
//         res.send("you can not acess")
//     }
//     else{
//         next()
//     }
// }
// app.use(middlewere)
// app.get("/",(req,res)=>{
//   res.send("Welcome to Home page")
// })
// app.get("/users",(req,res)=>{
//     res.send("Welcome to user page")
//   })
// app.listen(4000)


const express=require('express')
const app=express();
const router=express.Router()
const Urlcheck=(req,res,next)=>{
   console.log("curret",req.orignalUrl)
   next()
    
}
app.use(Urlcheck)
router.get("/",Urlcheck,(req,res)=>{
  res.send("Welcome to Home page")
})
router.get("/login",Urlcheck,(req,res)=>{
    res.send("Welcome to login  page")
  })
router.get("/users",Urlcheck,(req,res)=>{
    res.send("Welcome to user page")
  })
app.use('/',router)
app.listen(5000)