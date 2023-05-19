import React from "react";
import {Link ,useNavigate} from "react-router-dom"
const Navbar = () => {
  const navigate=useNavigate()
    const logout=()=>{
        localStorage.clear()
       navigate("/signup")
    }
    const auth=localStorage.getItem('registeredUser')

    return (
        <>
            <div>
                <ul className="nav-ul">
                    <li><Link to="/">product</Link></li>
                    <li><Link to="/add">add product </Link></li>
                    <li><Link to="/update">update product </Link></li>
                    <li><Link to="/profile">Profile </Link></li>
                    <li>{auth ? <Link onClick={logout} to="/signup">Logout </Link> : <Link to="/signup">SignUp </Link>}</li>

                </ul>
            </div>
        </>
    )
}
export default Navbar 