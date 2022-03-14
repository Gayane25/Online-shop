import React from 'react';
import bagIcon from '../asssets/shopping-cart.png';
export default function Header({ opening }) {
  return (
    <div>
      <header className='row block center'>
        <div>
          <a href='#/'>
            <h1>My Art Store</h1>
          </a>
        </div>
        <div className='bagIcon'>
          <img onClick={opening} src={bagIcon} />
        </div>
      </header>
    </div>
  );
}
