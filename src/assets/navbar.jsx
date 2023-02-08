import React from 'react';
import './Navbar.css'

function Navbar() {
  return (
  <nav>
    <div className='NavMain'>
      <div className="logo nav-items"></div>
      <div className="middle-nav nav-items"><a href="#">HOME</a></div>
      <div className="middle-nav nav-items"><a href="">PRODUCTS</a></div>
      <div className="middle-nav nav-items"><a href="">ABOUT</a></div>
      <div className="locate nav-items"><a href="">LOCATE OUR STORE</a></div>
    </div>
    </nav>
  )
}

export default Navbar

