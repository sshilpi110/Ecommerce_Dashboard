import React from "react" ;
import {Link}   from "react-router-dom"
const   Navbar=()=>{
return(
    <div>
        <ul className="ul-nav">
            <li><Link to="/">product</Link></li>
            <li><Link to="/add">AddProduct</Link></li>
            <li><Link to="/update">updateProduct</Link></li>
            <li><Link to="/profile">profile</Link></li>
            <li><Link to="/logout">logout</Link></li>

        </ul>
    </div>
)
}

export default Navbar;

