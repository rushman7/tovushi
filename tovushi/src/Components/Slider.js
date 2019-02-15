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
      currentIndex: 0,
      translateValue: 0
    }
  }

  lastSlide = () => {
    if(this.state.currentIndex === 0)
      return;

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }))
  }

  nextSlide = () => {
    if(this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }

  slideWidth = () => {
    return document.querySelector('.slide').clientWidth
  }

  render() {
    return (
      <div className="slider">

        <div className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
            {
              this.state.images.map((image, i) => (
                <Slide key={i} image={image} />  
              ))
            }
        </div>        

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