const express = require("express")

const app = express()

app.use("/user", (req,res, next)=>{
    console.log("First Response")
    next();
},
(req,res)=>{
    res.send("Hello Again from the server !! ")
})



app.listen(8000, ()=>{
    console.log("Server is running ");
    
}) 