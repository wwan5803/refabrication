import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./home";
import About from "./about";
import Experience from "./experience";
import Tech from "./tech";
import Business from "./business";
import Nav from "./nav";
import Contact from "./contact";
import registerServiceWorker from "./registerServiceWorker";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
// import { Switch, Route } from "react-router";

ReactDOM.render(
    <div>
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/experience" component={Experience}/>
                <Route path="/tech" component={Tech}/>
                <Route path="/business" component={Business}/>
            </Switch>
        </Router>
        <Nav />
        <Contact/>
    </div>,
    document.getElementById("root")
);
registerServiceWorker();
