

import { Routes, Route } from "react-router-dom"
import SignUp from "./SignUp"

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<h1>product listing</h1>} />
            <Route path="/add" element={<h1>add product  listing</h1>} />
            <Route path="/update" element={<h1>update listing</h1>} />
            <Route path="/logout" element={<h1>logout listing</h1>} />
            <Route path="/profile" element={<h1>profile listing</h1>} />
            <Route path="/signup" element={<SignUp/>} />

        </Routes>
    )
}

export default AllRoutes; 