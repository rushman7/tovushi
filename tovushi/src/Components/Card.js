import React from 'react';
import PropTypes from 'prop-types';

const Card = ({image}) => {
  const {index, title, picture, about} = image;
  return (
    <div id={`slide-${index}`} className="slide">
      <img src={picture} alt={title}/>
      <div className="details">
        <span className="index">{index+1}</span>
          <p className="text">
            {title}<br />
            {about}
          </p>
      </div>
    </div>
  )
}

Card.propTypes = {
  image: PropTypes.object.isRequired
}

export default Card;