import React from "react";
import logo from '../multiboba.png';
import { useState } from "react";


function Login(props) {
  const [name, setName] = useState("");

  return (
    <div className="login-view">
      <h1 className="title">ParTeaTime</h1>

      <div className="test">
        <h2 className="header2">Name</h2>
        <input
          className="textbox"
          type="text"
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>

      <div className="button">
      <button onClick={e =>  window.location.href='/About'} >Enter</button>
      </div>
      <div className="imgo"><img src={logo} className="img" alt="logo" /></div>
    </div>
  );
}

export default Login;
