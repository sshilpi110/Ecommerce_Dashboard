import React from "react"
import { Routes, Route } from "react-router-dom"
import SignUp from "./SignUp"
import Login from "./Login"
import AddProduct from "./AddProduct"
import ProductList from "./ProductList"
import PrivateRoute from "./PrivateRoute"


const AllRoutes = () => {
    return (
        <div>
            <Routes>

                <Route element={<PrivateRoute />}>
                    <Route path="/" element={<ProductList/>}></Route>
                    <Route path="/add" element={<AddProduct />}></Route>
                    <Route path="/update" element={<h1>Update product listing</h1>}></Route>
                    <Route path="/profile" element={<h1>profile listing</h1>}></Route>
                    <Route path="/logout" element={<h1>logout listing</h1>}></Route>
                </Route>

                <Route path="/signup" element={<SignUp />}></Route>
                <Route path="/login" element={<Login />}></Route>


            </Routes>
        </div>
    )
}
export default AllRoutes