import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <Link
          className="home-nav"
          to="/"
          style={{ textDecoration: "none"}}>
          <i className="fa fa-home" aria-hidden="true"></i>
          <span className="span">Home</span>
        </Link>
        <Link
          className="about-nav"
          to="/about"
          style={{ textDecoration: "none"}}>
          <i className="fa fa-info-circle" aria-hidden="true"></i>
          <span className="span">About</span>
        </Link>
        <Link
          className="classes-nav"
          to="/classes"
          style={{ textDecoration: "none"}}>
          <i className="fa fa-book" aria-hidden="true"></i>
          <span className="span">Classes</span>
        </Link>
        <Link
          className="schedule-nav"
          to="/schedule"
          style={{ textDecoration: "none"}}>
          <i className="fa fa-calendar" aria-hidden="true"></i>
          <span className="span">Schedule</span>
        </Link>
        <Link
          className="contact-nav"
          to="/contact"
          style={{ textDecoration: "none"}}>
          <i className="fa fa-phone" aria-hidden="true"></i>
          <span className="span">Contact</span>
        </Link>
      </div>
    )
  }
}

export default Nav;
