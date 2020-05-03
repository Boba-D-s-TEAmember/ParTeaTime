import React from "react";
import { useState } from "react";

function Login(props) {
  const [name, setName] = useState("");

  return (
    <div className="login-view">
      <h1 className="title">ParTeaTime</h1>

      <div className="test">
        <h2 className="header2">Name</h2>
        <input className="textbox" type="text"></input>
      </div>

      <div className="button">
        <button>Enter</button>
      </div>
    </div>
  );
}

export default Login;
