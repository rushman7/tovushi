import React, { Component } from 'react';
import Nav from './Nav';


class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <div className="home_page">
          Welcome to Tovushi Lite!
        </div>
      </React.Fragment>
    )
  }
}

export default Home;
