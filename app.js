const express = require("express")

const app = express()

app.get("/user", (req,res)=>{
    res.send("DATA USING GET METHOD")
})


app.post("/user", (req,res)=>{
    //logic for saving data to db
    console.log("Data submitted")
    res.send("DATA USING post METHOD")
})

app.listen(8000, ()=>{
    console.log("Server is running ");
    
}) 