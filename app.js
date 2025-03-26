const express = require("express")

const app = express()

app.use("/test",(req,res)=>{
    res.send("Hello From the server's test page  ")
})
app.listen(8000, ()=>{
    console.log("Server is running ");
    
})