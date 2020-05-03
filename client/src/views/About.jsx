import React from 'react'
import { useState } from "react";



function About(props) {
    const [name, setName] = useState("");
  
    return (
      <div className="login-view">
       <h1>This is about page</h1>
      </div>
    );
  }
  
  export default About;
  