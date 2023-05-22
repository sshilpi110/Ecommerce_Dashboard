
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const ProductList = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts()
    }, [])
    const getProducts = async () => {
        let result = await fetch("http://localhost:5500/products")
        result = await result.json()
        setProducts(result)
        console.log(result)

    }

    const deleteProduct = async (id) => {
        // console.log(id)
        let result = await fetch(`http://localhost:5500/delete/${id}`, {
            method: "Delete",

        })
        result = await result.json()
        if (result) {
            alert("product deleted !")
            getProducts()
        }
    }

    const searchHandle = async (e) => {
        let key = e.target.value;
        if (key) {
            let result = await fetch(`http://localhost:5500/search/${key}`)
            result = await result.json()
            //   console.log(rseult)
            if (result) {
                setProducts(result)
            }
        } else {
            getProducts()
        }
    }

    return (
        <div className="product-list">
            <h1>Product list</h1>
            <input type="text" placeholder="Search product here" className="search-input" onChange={searchHandle} />

            <ul>
                <li>S.No</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Brand</li>
                <li>Operation</li>

            </ul>
            {
                products.length > 0 ? products.map((item, index) =>
                    <ul key={item._id}>
                        <li>{index + 1}</li>
                        <li>{item.name}</li>
                        <li>{item.price}</li>
                        <li>{item.category}</li>
                        <li>{item.brand}</li>
                        <li>{<button onClick={() => deleteProduct(item._id)}>Delete</button>}</li>
                        <Link to={"/update/" + item._id}>update</Link>

                    </ul>

                )
                    :
                    <h1>No Result Found</h1>
            }




        </div>

    )
}
export default ProductList;