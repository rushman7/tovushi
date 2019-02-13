import React, { Component } from 'react';
import Nav from './Nav';
import FrontSide from '../Images/FrontSide.jpg';
import Drums from '../Images/Drums.jpg';
import DanceGroup from '../Images/DanceGroup.jpg';
import PurimParty from '../Images/PurimParty.jpg';
import Soccer from '../Images/Soccer.jpg';

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <div className="about">
          <div className="about-content">
            <p className="about-text-1">
              We are a kids community center located in Brooklyn, NY. We have children ranging from all ages 5 and up. 
            </p>
            <img src={FrontSide} alt="FrontSide" />;
          </div>
          <div className="about-content">
            <p className="about-text-2">
              A dance team, a soccer team, chess, drums and many more. 
            </p>
            <img src={Drums} alt="Drums" />;
          </div>
          <div className="about-content">
            <p className="about-text-3">
              Our dance ensemble are winners of multiple national dance competitions and our soccer team has participated in many soccer championships and coming as close as second place nation-wide. 
            </p>
            <img src={Soccer} alt="Soccer" />;
          </div>
          <div className="about-content">
            <p className="about-text-4">
              During the summer we also have a daily camp where children go on many trips including water parks, movie theatres, museums, etc. 
            </p>
            <img src={PurimParty} alt="PurimParty" />;
          </div>
          <div className="about-content">
            <p className="about-text-5">
              We would love to continue bringing kids together where it is to our dance classes, soccer classes, or our family friendly day camp.
            </p>
            <img src={DanceGroup} alt="DanceGroup" />;
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default About;
