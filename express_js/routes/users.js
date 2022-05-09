const express=require('express')
const router=express.Router()
const fs = require("fs")

var users =[
    {
        firstName:"Moomin",
        lastName:"saab",
        age:17
    }
];

router.get('/',(req,res)=>{
    console.log(users)
    res.json(users)
});
router.post('/',(req,res)=>{
    // console.log('POST ROUTE REACHED')
    // console.log(req.body)
    const user=req.body
    users.push(user)
    // res.send('POST ROUTE REACHED')
    
    res.send(`user with the name ${user.firstName} added to the database`)

})
router.get('/:id',(req,res)=>{
    res.json("the get id route")
})
module.exports=router;