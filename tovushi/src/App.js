import React, { Component } from 'react';
import { Route, withRouter } from "react-router-dom";

import './App.css';

import Home from './Components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={Home} />
      </div>
    );
  }
}

export default withRouter(App);
