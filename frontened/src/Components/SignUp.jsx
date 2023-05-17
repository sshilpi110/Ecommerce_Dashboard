
import React from "react" ;

const SignUp=()=>{
    return(
        <div>
            <h1>Register</h1>
            <input className="inputField" type="text" placeholder="Enter Name"/>
            <input className="inputField" type="email" placeholder="Enter Email"/>
            <input className="inputField" type="password" placeholder="Enter Password"/>
            <button type="button" className="signUpButton">SignUp</button>

        </div>
    )
}
export default SignUp;