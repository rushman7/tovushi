import React, { PropTypes, Component } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  display: flex;
  margin: 0 0 20px 20px;
`
const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`

class Carousel extends Component {
  render() {
    const { title, children } = this.props
  
    return (
      <div>
        <h2>{ title }</h2>
        { children }
      </div>
    )
  }
} 

Carousel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

export default Carousel;
export default CarouselContainer;
export default Wrapper;