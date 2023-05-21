import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"


const SignUp = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  useEffect(()=>{
    const auth=localStorage.getItem("user")
    if(auth){
      navigate("/")
    }
  },[])

  const handleSignup = async () => {
    console.log(name, email, password)
    let result = await fetch("http://localhost:5500/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    })
    result = await result.json()
    console.log(result)
    if (result) {
      localStorage.setItem("user",JSON.stringify(result))
      navigate("/")
    }
  }
  return (
    <div>
      <h1>Register</h1>
      <input className="input-box" type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
      <input className="input-box" type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input className="input-box" type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignup}
        className="signupButton">SignUp</button>

    </div>
  )
}

export default SignUp;