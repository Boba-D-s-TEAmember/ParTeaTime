import React from "react";
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
      <button /* onClick={} */>Enter</button>
      </div>
    </div>
  );
}

export default Login;
