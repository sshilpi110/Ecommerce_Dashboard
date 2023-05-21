import React from "react";
import { useState } from "react";


const SignUp = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

  const collectSignup=()=>{
    console.log(name,email,password)
  }
    return (
        <div>
            <h1>Register</h1>
            <input className="input-box" type="text" placeholder="Enter name" value={name}  onChange={(e)=>setName(e.target.value)}/>
            <input className="input-box" type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input className="input-box" type="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button  onClick={collectSignup}
            className="signupButton">SignUp</button>

        </div>
    )
}

export default SignUp;