import React from 'react'
import { useState } from "react";


function About(props) {
  
    return ((
      <div className="AboutUs-view">
        <h1 className="header3">Welcome!</h1>
        <h1 className="header4">About:</h1>
        <h2 className="header4">We are so happy to have you here! We created this as a way to connect different boba or tea enthusiasts together. We will connect people with others who are “drinking” the same boba flavors as them to chat, and share anything related to boba. We will give you the option to upload your own photos, captions and titles. Grab a comforting hot drink and get the coffee shop experience.</h2>
      <div className="test">
        <div className="button">
        <button>Take the Bobba Quiz</button>
        </div>
        <div className="button">
        <button>Go to Our Feed</button>
        </div>
      </div>
      </div>
    )
    );
  }
  
  export default About;
  