import React from 'react';

const Display = ({ acorns }) => {
  let acornPic = '';
  for (let i = 0; i < acorns; i++) {
    acornPic += '🌰';
  }
  return(
  <div className="counter">
    <p> {acorns}</p>
    <p>{acornPic}</p>
  </div>)
}
export default Display;
