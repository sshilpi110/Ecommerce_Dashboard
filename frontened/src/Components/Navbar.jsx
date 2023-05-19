import React from "react";
import { Link, useNavigate } from "react-router-dom"
const Navbar = () => {
    const auth = localStorage.getItem('user')
    const navigate = useNavigate()
    const logout = () => {
        localStorage.clear()
        navigate("/signup")
    }

    return (

        <div>
            <img className="logo" alt="logo" src="https://w7.pngwing.com/pngs/502/794/png-transparent-white-arrow-going-up-computer-icons-dashboard-car-symbol-dashboard-icon-miscellaneous-angle-logo.png"/>
            {auth ? <ul className="nav-ul">
                <li><Link to="/">product</Link></li>
                <li><Link to="/add">add product </Link></li>
                <li><Link to="/update">update product </Link></li>
                <li><Link to="/profile">Profile </Link></li>
                <li><Link onClick={logout} to="/signup">Logout ({JSON.parse(auth)[0].name})</Link></li>

            </ul>
                :
                <ul className="nav-ul nav-right">
                    <li><Link to="/signup">SignUp </Link></li>
                    <li><Link to="/login">Login </Link></li>
                </ul>
            }
        </div>

    )
}
export default Navbar 