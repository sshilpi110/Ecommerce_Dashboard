
const express=require("express")
const app=express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("app is working")
})

app.listen((4500,()=>{
    console.log("server is running at port 4500")
}))