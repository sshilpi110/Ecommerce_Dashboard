import React from "react";
import { Link, useNavigate } from "react-router-dom"
const Navbar = () => {
    const auth = localStorage.getItem("user")
    const navigate = useNavigate()
    const logout = () => {
        localStorage.clear()
        navigate("/signup")
    }
    return (
        <div>
            <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3BS07VFIUM8TKDard2oyBHvHf0wl1QPvc_EB_qOYCUMT1orbugGVXDe282hSKRMMgAZ4&usqp=CAU" alt="logo-png"/>
            {auth ? <ul className="ul-nav">
                <li><Link to="/">product</Link></li>
                <li><Link to="/add">AddProduct</Link></li>
                <li><Link to="/update">updateProduct</Link></li>
                <li><Link to="/profile">profile</Link></li>
                <li><Link onClick={logout} to="/signup">logout({JSON.parse(auth).name})</Link></li>
            </ul>
                :
                <ul className="ul-nav nav-right">
                    <li><Link to="/signup">signup</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            }

        </div>
    )
}

export default Navbar;

