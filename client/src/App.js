import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./views/Login";
import About from "./views/About";
import Feed from "./views/Feed";
import MakePost from "./views/MakePost";
import BobaQuiz from "./views/BobaQuiz";

import "./App.css";
import "typeface-gamja-flower";
import "typeface-open-sans";

function App(props) {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <span className="h2 rounded badge-warning">
            <Link to="/">Home</Link>
          </span>

          <span className="h2 rounded badge-warning">
            <Link to="/about">About</Link>
          </span>

          <span className="h2 rounded badge-warning">
            {" "}
            <Link to="/feed">Feed</Link>
          </span>

          <span className="h2 rounded badge-warning">
            {" "}
            <Link to="/post">Make Post</Link>
          </span>
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
          <Route exact path="/BobaQuiz">
            <BobaQuiz />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/post">
            <MakePost history={props} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
