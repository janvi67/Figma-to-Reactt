import React from 'react';
import './header.css';

function Header() {
  return (
    <div className='container'>
      <div className='left-section'>
        <img src='/Vector.png' alt='Vector Logo' />
        <p className='icon-text'>
          pod in<br/>the park
        </p>
      </div>
      <div className='nav'>
        <a href='#'>Home</a>
        <a href='#'>Studio Booking</a>
        <a href='#'>Contact Us</a>
        <button>Book Now</button>
      </div>
    </div>
  );
}

export default Header;
