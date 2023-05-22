import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";


const UpdateProduct = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [brand, setBrand] = useState("")
    const params = useParams()
    const navigate=useNavigate()
    useEffect(() => {
        getProductDetails()
    }, [])

    const getProductDetails = async () => {
        console.log(params)
        let result = await fetch(`http://localhost:5500/product/${params.id}`)
        result = await result.json()
        console.log(result)
        setName(result.name)
        setPrice(result.price)
        setCategory(result.category)
        setBrand(result.brand)
    }

    const updateProduct = async() => {
        console.log(name, price, category, brand)
        let result= await fetch(`http://localhost:5500/update/${params.id}`,{
            method:"put",
            body:JSON.stringify({name,price,category,brand}),
            headers:{
                "Content-Type":"application/json"
            }
        })
        result= await result.json()
        console.log(result)
        navigate("/")
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