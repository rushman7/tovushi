import React, { Component } from 'react';
import Nav from './Nav';

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <div>
          <p className="about-text">
            We are a kids community center located in Brooklyn, NY. We have children ranging from all ages 5 and up. A dance team, a soccer team, chess, drums and many more. Our dance ensemble are winners of multiple national dance competitions and our soccer team has participated in many soccer championships and coming as close as second place nation-wide. During the summer we also have a daily camp where children go on many trips including water parks, movie theatres, museums, etc. We would love to continue bringing kids together where it is to our dance classes, soccer classes, or our family friendly day camp.
          </p>
        </div>
      </React.Fragment>
    )
  }
}

export default About;
