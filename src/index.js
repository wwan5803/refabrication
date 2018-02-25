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
                <Route exact path={process.env.PUBLIC_URL + '/'} component={Home}/>
                <Route path={process.env.PUBLIC_URL + '/about'} component={About}/>
                <Route path={process.env.PUBLIC_URL + '/experience'} component={Experience}/>
                <Route path={process.env.PUBLIC_URL + '/tech'} component={Tech}/>
                <Route path={process.env.PUBLIC_URL + '/business'} component={Business}/>
            </Switch>
        </Router>
        <Nav />
        <Contact/>
    </div>,
    document.getElementById("root")
);
registerServiceWorker();
