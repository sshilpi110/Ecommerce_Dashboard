
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    useEffect(() => {
        const auth = localStorage.getItem("loginUser")
        if (auth) {
            navigate("/")
        }
    })

    const handleLogin = async () => {
        console.log(email, password)
        let result = await fetch("http://localhost:4500/login", {
            method: "post",
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type": "application/json"
            }

        });
        result = await result.json();
        console.log(result)
        if(result.name){
            localStorage.setItem("loginUser", JSON.stringify(result))
            navigate("/")
        }else{
            alert("please enter correct details")
        }
        

    }
    return (
        <div className="login">
            <h1>Login Page</h1>
            <input className="inputField" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />

            <input className="inputField" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />

            <button onClick={handleLogin} type="button" className="signUpButton">Login</button>
        </div>
    )
}



export default Login;