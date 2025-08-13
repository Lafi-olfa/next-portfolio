'use client';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isDarkMode, setIsDarkmode] = useState(true);
  function handleClick() {
    setIsMobile(prev => !prev);
  }
    function handleClickMode() {
    setIsDarkmode(prev => !prev);
  }
  return (
    <div className={`navbar-container ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="logo">
        <p>Portfolio</p>
        {/* <img src="" alt="" srcset="" /> */}
      </div>
      <div className="mode btn d-lg-none" onClick={handleClickMode}>
        {isDarkMode ? <MdDarkMode /> : <CiLight />}
        </div>
            <div className="bars btn d-lg-none d-md-none" onClick={handleClick}>
        {isMobile ? <IoClose /> : <FaBars />}
        </div>
        {isMobile && (
        <div className="navbar-list-mobile d-lg-none d-md-none">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div> )}

        <div className="navbar-list d-none d-md-flex">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
    </div>
  );
}
