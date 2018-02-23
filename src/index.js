import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./home";
import About from "./about";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Switch, Route } from "react-router";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
