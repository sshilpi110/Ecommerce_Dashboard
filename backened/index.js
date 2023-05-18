
const express = require("express")
const cors=require("cors")
const { connection } = require("./db/config")
const { UserModel } = require("./Model/User.model")
const app = express()
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("app is working")
})

app.post("/register", async(req, res) => {
    const userDetails=req.body
    try{
        const user=new UserModel(userDetails)
        await user.save()
        res.send(user)
        
    }catch(err){
        res.send({"msg":" not registered","error":err.message})
    }
})



app.listen(4500, () => {
    console.log("server is running at port 4500")
})