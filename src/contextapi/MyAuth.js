import React, { useState } from "react";
import AuthContext from "./Auth";
import { auth } from "../config/FirebaseAuth";
import firebase from "firebase/compat/app";

function MyAuth({ children }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // dark mode usestate
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")));

  const signUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        return res.user;
      })
      .then((userdata) => {
        console.log(userdata);
      })
      .catch((error) => alert(error.message));
    setEmail("");
    setPassword("");
  };

  const signin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        return res.user;
      })
      .then((user) => {
        console.log("sign", user);
      })
      .catch((error) => alert(error.message));
  };

  const Googlelogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((res) => {
        return res.user;
      })
      .then((user) => {
        console.log(user);
      })
      .catch((error) => console.log(error.message));
  };

  const logout = () =>{
    auth.signOut()
  }

  return (
    <AuthContext.Provider
      value={{
        theme,
        setTheme,
        signUp,
        setEmail,
        setPassword,
        signin,
        email,
        password,
        Googlelogin,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default MyAuth;
