import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./home";
import About from "./about";
import Nav from "./nav";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { Switch, Route } from "react-router";

ReactDOM.render(
  <div>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
    <Nav />
  </div>,
  document.getElementById("root")
);
registerServiceWorker();
