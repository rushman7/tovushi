import React, { Component } from 'react';
import Nav from './Nav';
import Carousel from './Carousel';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <div className="home_page">
          Welcome to Tovushi Lite!
          <Carousel />
        </div>
      </React.Fragment>
    )
  }
}

export default Home;
