import React from "react";
import {Link} from "react-router-dom"
const Navbar = () => {
    return (
        <>
            <div>
                <ul className="nav-ul">
                    <li><Link to="/">product</Link></li>
                    <li><Link to="/add">add product </Link></li>
                    <li><Link to="/update">update product </Link></li>
                    <li><Link to="/logout">Logout </Link></li>
                    <li><Link to="/profile">Profile </Link></li>
                    <li><Link to="/signup">SignUp </Link></li>

                </ul>
            </div>
        </>
    )
}
export default Navbar 