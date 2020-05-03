import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

import Login from "./views/Login";
import About from "./views/About";
import Feed from "./views/Feed";
import MakePost from './views/MakePost'
import "./App.css";
import "typeface-gamja-flower";
import "typeface-open-sans";

function App(props) {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/feed">Feed</Link>
            </li>
            <li>
              <Link to="/post">Make Post</Link>
            </li>
            
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/feed">
            <Feed />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/post">
            <MakePost data={props} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
