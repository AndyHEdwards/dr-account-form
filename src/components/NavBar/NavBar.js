import React from 'react';
import './NavBar.css';

import drLogo from '../../assets/icons/dr-logo.svg';

const NavBar = (props) => {
  return (
    <div id='nav-bar'>
      <img src={drLogo} className='dr-logo' alt='digitial risks logo' />

      <p className='nav-bar__call-us'>Call us on <a href='tel:0337720759'>033 772 0759</a></p>
    </div>
  );
}

export default NavBar;
