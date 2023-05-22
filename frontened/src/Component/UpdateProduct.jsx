import React, { useState } from "react";


const UpdateProduct = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [brand, setBrand] = useState("")

    const updateProduct = () => {
        console.log(name, price, category, brand)
    }


    return (
        <>
            <h1>update products here</h1>
            <div className="update-product">
                <input type="text" className="input-box" placeholder="update name" onChange={(e) => setName(e.target.value)} value={name} />

                <input type="text" className="input-box" placeholder="update price" onChange={(e) => setPrice(e.target.value)} value={price} />

                <input type="text" className="input-box" placeholder="update category" onChange={(e) => setCategory(e.target.value)} value={category} />

                <input type="text" className="input-box" placeholder="update brand" onChange={(e) => setBrand(e.target.value)} value={brand} />

                <button className="productBtn" onClick={updateProduct}>Update product</button>


            </div>
        </>
    )
}
export default UpdateProduct;