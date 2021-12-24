import React, { useContext } from "react";
import "./Signup.css";
import MyAuth from "../contextapi/Auth";

function SIgnup() {
  const { signUp, setEmail, setPassword, email, password } = useContext(MyAuth);
  const handleform = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleform}>
        <input type="email" placeholder="Enter Your Email" value={email} 
        onChange={(e)=> setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <button onClick={signUp}>Sign Up</button>
      </form>
    </>
  );
}

export default SIgnup;
