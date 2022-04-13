// import React from 'react'

import { useState } from "react";
import Budget from "../../Budget";
import Register from "./Register";

function Login ({setAlert})  {
  const [input, setInput] = useState({userName:'',password:''})
  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  
  };

  const [render, setrender] = useState(false)

   const renderBudgetApp = () => {
     let loginDetails = { ...input };
     if (
       loginDetails.userName === localStorage.getItem(Register.userName) &&
       loginDetails.password === localStorage.getItem(Register.password)
     ){ 
      setrender (true)
      setAlert({ ishow: true, status: "success", message: "Login Successful" });
     } else {
       setAlert({ ishow: true, status: "error", message: "Invalid Username or Password" });
     }
    
   };
    
  return (
    // setrender() ?
    // <Budget/> :
    <>
      {!render ? 
        <div className="auth-register">
          <h1>Welcome to your BudgetApp</h1>

          <div className="Username">
            <p>Username</p>
            <input name="userName" onChange={handleInput} />
          </div>
          <div className="Password">
            <p>Password</p>
            <input name="password" onChange={handleInput} />
          </div>
          <button onClick={renderBudgetApp}>Login</button>
        </div>
      : 
        <Budget />
      }
    </>
  )
  
}

export default Login