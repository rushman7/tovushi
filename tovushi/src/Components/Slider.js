import React, { Component } from 'react';
import Card from './Card';
import data from '../data/data';

class Slider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: data.images,
      image: data.images[0]
    }
  }

  nextSlide = () => {
    const newIndex = this.state.image.index+1
    this.setState({
      image: data.images[newIndex]
    })
  }

  prevSlide = () => {
    const newIndex = this.state.image.index-1
    this.setState({
      image: data.images[newIndex]
    })
  }

  render () {
    const {image} = this.state;
    return (
      <div className="slider-container">
        <Card image={image} />        
        <button 
          onClick={() => this.nextSlide()}
          disabled={image.index === data.images.length-1}> 
          Next 
        </button>
        <button 
          onClick={() => this.prevSlide()}
          disabled={image.index === 0}> 
          Prev
        </button>
      </div>
    )
  }
}

export default Slider;