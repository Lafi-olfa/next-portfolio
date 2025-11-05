'use client';
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const closeMenu = () => {
    setIsOpen(false);
  }

  return (
    <div className="w-full fixed top-0 z-50 border-b-2 border-indigo-100 bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <span className="text-xl font-bold text-gray-800">Portfolio</span>
        
        {/* Bouton */}
        <button 
          className="lg:hidden p-2 text-gray-700 hover:text-amber-500 transition-colors"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {isOpen ? <IoClose size={24} /> : <FaBars size={24} />}
        </button>

        {/* mobile */}
        <div className={`
          lg:hidden fixed inset-0 top-16 bg-white z-40 
          transition-all duration-300 ease-in-out
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}>
          <ul className="flex flex-col pt-8 px-6 space-y-6">
            {navItems.map((item, i) => (
              <li key={i}>
                <a 
                  href={item.href} 
                  className="block py-3 text-lg text-gray-700 hover:text-amber-500 
                           transition-colors duration-200 border-b border-gray-100"
                  onClick={closeMenu}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Menu desktop */}
        <ul className="hidden lg:flex flex-row items-center space-x-8">
          {navItems.map((item, i) => (
            <li key={i}>
              <a 
                href={item.href} 
                className="text-gray-700 hover:text-amber-500 transition-colors 
                         duration-200 font-medium py-2 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 
                              transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}