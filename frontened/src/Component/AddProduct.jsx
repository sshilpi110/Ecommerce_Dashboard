import React, { useState } from "react";

const AddProduct = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [brand, setBrand] = useState("")

    const handleAddProduct = async () => {
        console.log(name, price, category, brand)
        const userId = JSON.parse(localStorage.getItem("user"))._id;
        let result = await fetch("http://localhost:5500/add-product", {
            method: "post",
            body: JSON.stringify({ name, price, category, userId, brand }),
            headers: {
                "Content-Type": "application/json"
            }

        })
        result = await result.json()
        localStorage.setItem("product",JSON.stringify(result))
        console.log(result)
    }

    return (
        <>
            <h1>Add Product page</h1>
            <div className="product">
                <input className="input-box" type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} value={name} />
                <input className="input-box" type="text" placeholder="Enter Price" onChange={(e) => setPrice(e.target.value)} value={price} />
                <input className="input-box" type="text" placeholder="Enter Category" onChange={(e) => setCategory(e.target.value)} value={category} />
                <input className="input-box" type="text" placeholder="Enter Brand" onChange={(e) => setBrand(e.target.value)} value={brand} />

                <button onClick={handleAddProduct} className="productBtn">Add Product</button>


            </div>
        </>
    )
}
export default AddProduct;