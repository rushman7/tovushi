import React, { Component } from 'react';

class Slider extends Component {
  render () {
    return (
      <div className="slider-container middle">
        <div className="slides">
          <input type="radio" name="r" id="r1" checked />
          <input type="radio" name="r" id="r2" />
          <input type="radio" name="r" id="r3" />
          <div className="slide">
            <img src="https://i.imgur.com/yCjwSrZ.jpg" alt=""/>
            <img src="https://i.imgur.com/jovIZXq.jpg" alt=""/>
            <img src="https://i.imgur.com/a1EyhcL.jpg" alt=""/>
          </div>
          <div className="navigation">
            <label htmlFor="r1" class="label"></label>
            <label htmlFor="r2" class="label"></label>
            <label htmlFor="r3" class="label"></label>
          </div>
        </div>
      </div>  
    )
  }
}

export default Slider;