
const express = require("express")
const cors=require("cors")
const { connection } = require("./db/database")
const { UserModel } = require("./db/users")
const app = express()
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("app is working")
})
app.post("/register", async (req, res) => {
    let user = new UserModel(req.body)
    let result = await user.save()
    res.send(result)
})

app.listen(5500, () => {
    console.log("server is running at port 5500")
})