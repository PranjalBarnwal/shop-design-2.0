import React from 'react';
import './Navbar.css';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from "../resources/Logo.png";

function Navbar() {
  // const [toggle, setToggle] = useState(false);
  // const toggleFunc = () => {
  //   setToggle(!toggle);
  // };
  const menuBtn=document.querySelector(".menu-open");
  const nav=document.querySelector(".NavMain");
  menuBtn.addEventListener(onclick,function(){
    nav.classList.toggle("active");
  })
  return (
    <nav className='nav'>
      <div className="logo">
        <img className='logoimg' src={Logo} alt="logo"  />
      </div>
      <div className='burger'>
      <div className='menu-open'><MenuIcon/></div>
      <div className='menu-close'><CloseIcon/></div>
      
      </div>

    <div className='NavMain active'>
      <div classname="emptydiv nav-items "></div>
      <div className="middle-nav nav-items"><a href="#">HOME</a></div>
      <div className="middle-nav nav-items"><a href="">PRODUCTS</a></div>
      <div className="middle-nav nav-items"><a href="">ABOUT</a></div>
      <div className="locate nav-items"><a href="">LOCATE US</a></div>
    </div>
    </nav>
  )
}

export default Navbar

