

import { Routes, Route } from "react-router-dom"
import SignUp from "./SignUp";
import Login from './Login';
import PrivateRoutes from "./PrivateRoutes";

const AllRoutes = () => {
    return (
        <Routes>
            <Route element={<PrivateRoutes />}>
                <Route path="/" element={<h1>product listing</h1>} />
                <Route path="/add" element={<h1>add product  listing</h1>} />
                <Route path="/update" element={<h1>update listing</h1>} />
                <Route path="/logout" element={<h1>logout listing</h1>} />
                <Route path="/profile" element={<h1>profile listing</h1>} />

            </Route>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />


        </Routes>
    )
}

export default AllRoutes; 