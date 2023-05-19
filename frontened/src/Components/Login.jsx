
import React from "react";
import { useState } from "react";
const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const handleLogin=()=>{
        console.log(email,password)
    }
    return (
        <>
        <h1>Login Page</h1>
            <input className="inputField" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />

            <input className="inputField" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />

            <button onClick={handleLogin} type="button" className="signUpButton">Login</button>
        </>
    )
}
export default Login;