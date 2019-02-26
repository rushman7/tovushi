import React, { Component } from 'react';

class Slider extends Component {
  render () {
    return (
      <div className="slider-container middle">
        <div className="slides">
          <div className="slide s1">
            <img src="https://i.imgur.com/jovIZXq.jpg" alt=""/>
            <img src="https://i.imgur.com/yCjwSrZ.jpg" alt=""/>
            <img src="https://i.imgur.com/a1EyhcL.jpg" alt=""/>
          </div>
        </div>
      </div>
    )
  }
}

export default Slider;