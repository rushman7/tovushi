import React, { Component } from 'react';

let sliderImages = document.querySelectorAll('.slide')
let arrowLeft = document.querySelector('#arrow-left')
let arrowRight = document.querySelector('#arrow-right')
let current = 0;

function reset() {
  for(let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = 'none';
  }
}

function startSlide() {
  reset();
  sliderImages[0].style.display = 'block';
}

function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = 'block';
  current--;
}

if (arrowLeft) {
  arrowLeft.addEventListener('click', function() {
    if(current === 0) {
      current = sliderImages.length;
    }
    slideLeft();
  }) 
}


function slideRight() {
  reset();
  sliderImages[current + 1].style.display = 'block';
  current++;
}

if(arrowRight) {
  arrowRight.addEventListener('click', function() {
    if(current === sliderImages.length - 1) {
      current = -1;
    }
    slideRight();
  })
}

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

startSlide();

export default Slider;
