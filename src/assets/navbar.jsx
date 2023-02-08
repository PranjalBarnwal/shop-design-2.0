import React from 'react';
import './Navbar.css'
import { useState } from 'react';
import Logo from "../resources/Logo.png";
import Logo2 from "../resources/Logo2.png";
function Navbar() {
  // let h=true;
  // const[h,seth]=useState(true);
  // window.addEventListener("scroll",function(){
  //  if(window.scrollY==0) seth(false);
  //  else seth(true);
  //  console.log(h);

  // })
  return (
  <nav className='nav'>
    <div className='NavMain'>
      <div className="logo nav-items">
        <img className='logoimg' src={Logo} alt="logo"  />
        {/* <img className={`logo2img ${!h?'hide':''}`} src={Logo2} alt="logo"  /> */}
      </div>
      <div className="middle-nav nav-items"><a href="#">HOME</a></div>
      <div className="middle-nav nav-items"><a href="">PRODUCTS</a></div>
      <div className="middle-nav nav-items"><a href="">ABOUT</a></div>
      <div className="locate nav-items"><a href="">LOCATE OUR STORE</a></div>
    </div>
    </nav>
  )
}

export default Navbar

