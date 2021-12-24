import React, { useContext } from "react";
import MyAuth from "../contextapi/Auth";

function SignIn() {
  const { signin } = useContext(MyAuth);
  const handlechange = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handlechange}>
        <input type="email" placeholder="Enter Your Email" />
        <input type="password" placeholder="Enter Your Password" />
        <button onClick={signin}>Sign IN</button>
      </form>
    </>
  );
}

export default SignIn;
