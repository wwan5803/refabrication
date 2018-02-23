import React, { Component } from "react";
import "./nav.css";

export default class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="logo">
          <img
              style={{marginLeft: 30}}
            src="https://www.upgrowth.com.au/static/media/text-logo.3a56559d.svg"
          />
        </div>
        <div className="links">
          <div>Experience Design</div>
          <div>Tech delivery</div>
          <div>Business design</div>
        </div>
        <div className="contact">
          <button>Get in touch</button>
        </div>
      </div>
    );
  }
}
