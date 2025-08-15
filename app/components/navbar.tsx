'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Portfolio</div>

      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <IoClose /> : <FaBars />}
      </div>

      
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
