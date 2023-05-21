import React from "react"
import { Routes, Route } from "react-router-dom"


const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<h1>product listing</h1>}></Route>
                <Route path="/add" element={<h1>ADDproduct listing</h1>}></Route>
                <Route path="/update" element={<h1>Update product listing</h1>}></Route>
                <Route path="/profile" element={<h1>profile listing</h1>}></Route>
                <Route path="/logout" element={<h1>logout listing</h1>}></Route>

            </Routes>
        </div>
    )
}
export default AllRoutes