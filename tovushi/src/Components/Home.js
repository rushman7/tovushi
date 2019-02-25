import React, { Component } from 'react';
import Nav from './Nav';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <div className="home_page">
          <h2 className="home_title">Welcome to Light Kids Center</h2>
        </div>
      </React.Fragment>
    )
  }
}

export default Home;
