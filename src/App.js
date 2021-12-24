import React, { useContext } from "react";
import MyAuth from "./contextapi/Auth";
import "./App.css";
import Signup from "./Component/SIgnup";
import SignIn from "./Component/Signin";

function App() {
  const { theme, setTheme, Googlelogin,logout } = useContext(MyAuth);
  localStorage.setItem("theme", JSON.stringify(theme));
  const { signUp } = useContext(MyAuth);
  console.log(signUp);
  const toggletheme = () => {
    setTheme(!theme);
  };
  return (
    <div className={theme ? "light" : "dark"}>
      <h1>Hello Context api</h1>
      <br />
      <h4>{theme ? "Light Theme" : "Dark Theme"}</h4>
      <input type="checkbox" onChange={toggletheme} checked={theme} />
      <Signup />
      <SignIn />
      <button onClick={Googlelogin}>SignIn With Google</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default App;
