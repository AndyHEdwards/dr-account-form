import React from 'react';
import './Footer.css';

const Footer = (props) => {
  return (
    <div id='footer'>
      <div className='footer__totals'>
        <p className='footer__subheading'>Total premium</p>
        <p className='footer__total'>£223.50</p>
        <p className='footer__subheading'>Per month. 0% APR, Tax Inc.</p>
      </div>
      <div className='footer__submit'>
        <button className='footer__submit__button' onClick={props.handleSubmit}>Confirm</button>
      </div>
    </div>
  );
}

export default Footer;
