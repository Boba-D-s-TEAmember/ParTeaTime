import React from "react";
import { useState } from "react";

function Login(props) {
  const [name, setName] = useState("");

  return (
    <div className="login-view">
      <h1 className="title">ParTeaTime</h1>
    </div>
  );
}

export default Login;
