
const express = require("express")
const cors = require("cors")
const { connection } = require("./db/database")
const { UserModel } = require("./db/users")
const {ProductModel} =require("./db/product")
const app = express()
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("app is working")
})
app.post("/register", async (req, res) => {
    let user = new UserModel(req.body)
    let result = await user.save()
    result = result.toObject()
    delete result.password
    res.send(result)
})

app.post("/login", async (req, res) => {
    // console.log(req.body)
    let user = await UserModel.findOne(req.body).select("-password")
    if (req.body.password && req.body.email) {
        if (user) {
            res.send(user)
        } else {
            res.send({ "msg": "user not found" })
        }
    } else {
        res.send({ "msg": "wrong credentials" })
    }

})

app.post("/add-product",async(req,res)=>{
    let product= new ProductModel(req.body)
    let result= await product.save()
    res.send(result)
})

app.get("/products",async(req,res)=>{
    let products= await ProductModel.find()
    if(products.length>0){
        res.send(products)
    }else{
        res.send({"msg":"product not found"})
    }
})
 app.delete("/delete/:id",async(req,res)=>{
  const result= await ProductModel.deleteOne({_id:req.params.id})
    res.send(result)

 })

app.listen(5500, () => {
    console.log("server is running at port 5500")
})