// const items = [
//   {
//     src: 'https://i.imgur.com/yCjwSrZ.jpg',
//     altText: 'Our soccer team placed second in USA Disney Soccer Championship',
//     caption: 'Soccer Championship in Orlando, Florida'
//   },
//   {
//     src: 'https://i.imgur.com/jovIZXq.jpg',
//     altText: 'Joined us at the Light Kids Centers pre-New Year celebration and dance showcase',
//     caption: 'Public Advocate Candidate Tony Herbert supporting Light Kids Center'
//   },
//   {
//     src: 'https://i.imgur.com/a1EyhcL.jpg',
//     altText: 'Our dancers perform many dances such as Chechenzki',
//     caption: 'Dance Performance in Master Theatre'
//   }
// ];

import React from 'react'

const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%'
  }
  return <div className="slide"></div>
}

export default Slide
