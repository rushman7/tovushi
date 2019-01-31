import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <Link
          className="about-nav"
          to="/about"
          style={{ textDecoration: "none"}}>
          <span className="span">About</span>
        </Link>
        <Link
          className="classes-nav"
          to="/classes"
          style={{ textDecoration: "none"}}>
          <span className="span">Classes</span>
        </Link>
        <Link
          className="schedule-nav"
          to="/schedule"
          style={{ textDecoration: "none"}}>
          <span className="span">Schedule</span>
        </Link>
        <Link
          className="contact-nav"
          to="/contact"
          style={{ textDecoration: "none"}}>
          <span className="span">Contact</span>
        </Link>
      </div>
    )
  }
}

export default Nav;
