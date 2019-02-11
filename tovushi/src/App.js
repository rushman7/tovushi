import React, { Component } from 'react';
import { Route, withRouter } from "react-router-dom";
import './Styles/css/index.css';
import Home from './Components/Home';
import About from './Components/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    );
  }
}

export default withRouter(App);
