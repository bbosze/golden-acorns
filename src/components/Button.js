import React from 'react';
import '../App.css';

const Button = ({ buyOne, eatOne }) => {
  return(
    <div>
      <button className="button" onClick={ buyOne }>Buy one</button>
      <button className="button" onClick={ eatOne }>Eat one</button>
    </div>
  )
}

export default Button;
