import React, { Component } from 'react';
import Slide from './Slide';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

class Slider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [
        "https://i.imgur.com/yCjwSrZ.jpg",
        "https://i.imgur.com/jovIZXq.jpg",
        "https://i.imgur.com/a1EyhcL.jpg",
      ],
      currentIndex: 0
    }
  }

  lastSlide = () => {

  }

  nextSlide = () => {
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1
    }));
  }

  render() {
    return (
      <div className="slider">

        {
          this.state.images.map((image, i) => (
            <Slide key={i} image={image} />  
          ))
        }
        

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