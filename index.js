
const express=require("express")
const app=express()

app.get("/",(req,res)=>{
    res.send("app is working")
})

app.listen(4500,()=>{
    console.log("server is runnig at port 4500")
})