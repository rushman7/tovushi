import React from 'react';
import Slide from './slide';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

class Slider extends Compontent {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div className="slider">
        <Slide />

        <LeftArrow />
        <RightArrow />
      </div>
    )
  }
}

export default Slider;