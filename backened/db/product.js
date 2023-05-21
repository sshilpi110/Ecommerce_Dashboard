const mongoose=require("mongoose")
const productSchema= new mongoose.Schema({
    name:String,
    price:String,
    category:String,
    userId:String,
    brand:String
})


const ProductModel=mongoose.model("product",productSchema)

module.exports={
    ProductModel
}