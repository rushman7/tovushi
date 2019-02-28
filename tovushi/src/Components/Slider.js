import React, { Component } from 'react';


class Slider extends Component {
  render () {
    return (
      <div className="slider-container">
        <div id ="arrow-left" className="arrow"></div>
        <div className="slider">
          <div className="slide slide1">
            <div className="slide-content">
              <span>Image One</span>
            </div>
          </div>
          <div className="slide slide2">
            <div className="slide-content">
              <span>Image Two</span>
            </div>
          </div>
          <div className="slide slide3">
            <div className="slide-content">
              <span>Image Three</span>
            </div>
          </div>
        </div>
        <div id ="arrow-right" className="arrow"></div>
      </div>
    )
  }
}

export default Slider;
