import React, { Component } from 'react';
import Nav from './Nav';
import Slider from './Slider';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <div className="home_page">
          <h2 className="home_title">Welcome to Light Kids Center</h2>
          <Slider />
        </div>
      </React.Fragment>
    )
  }
}

export default Home;
