
import React, { useState } from "react";
import {useNavigate} from "react-router-dom"

const SignUp = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate=useNavigate()
    
    const collectData= async()=>{
        console.warn(name,email,password)
        let result= await fetch("http://localhost:4500/register",{
          method:"post",
          body:JSON.stringify({name,email,password}),
          headers:{
            "Content-Type":'application/json'
          }
        })
         result= await result.json()
         console.warn(result)
         localStorage.setItem("registeredUser",JSON.stringify(result))
         if(result){
            navigate("/")
         }
    }

    return (
        <div>
            <h1>Register</h1> 

            <input className="inputField" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" /> 

            <input className="inputField" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" /> 

            <input className="inputField" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />

            <button  onClick={collectData}type="button" className="signUpButton">SignUp</button>

        </div>
    )
}
export default SignUp;