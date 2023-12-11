import React from 'react';
import './header.css';
import Companylogo from '../../assests/Layer_1.svg';
import Booklogo from '../../assests/book.png';
import Bell from '../../assests/bell.svg';
 import Profile from  '../../assests/Profile.svg';

const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo">
      <img src={Companylogo}  alt='companylogo'/>
      </div>
      <div className="nav-links">
        <a href="#know-your-career">Know Your Career</a>
        <a href="#cancer-solutions">Cancer Solutions</a>
        <a href="#resource-center">Resource Center</a>
        <a href="#about-us">About Us</a>
        <a href="#join-us">Join Us</a>
      </div>
      <div className="right-section">
      <div className='right-side-btn'>
      <div>
      Track Your Symptoms</div>
        <img src={Booklogo}  alt='booklogo'/>
      </div>
        <span className="icons"><img src={Bell} alt='bell' /></span>
 <span className="icon"><img src={Profile}  alt='profile'/></span> 
      </div>
    </nav>
  );
};


export default Header;
