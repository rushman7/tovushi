import React, { Component } from 'react';
import Slide from './Slide';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

class Slider extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  lastSlide = () => {

  }

  nextSlide = () => {

  }

  render() {
    return (
      <div className="slider">
        <Slide />

        <LeftArrow 
          lastSlide={this.lastSlide}
        />
        <RightArrow 
          nextSlide={this.nextSlide}
        />
      </div>
    )
  }
}

export default Slider;