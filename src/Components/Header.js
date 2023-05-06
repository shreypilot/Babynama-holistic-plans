import React from 'react'
import { useState,useEffect } from 'react';
import {BiSun } from 'react-icons/bi';
import {RiMoonLine } from 'react-icons/ri';
import { toggleTheme } from '../utils/themeSlice';
import { useDispatch, useSelector } from 'react-redux';




function Header() {
    const theme = useSelector((state) => state.theme);
    const dispatch = useDispatch();
    const handleToggleTheme = () => {
        dispatch(toggleTheme());
      };
    const [isMenuOpen, setIsMenuOpen] = useState(true);
   
    
  return (
    <div className="fixed top-0 left-0 right-0">
      <header className={`bg-gray-100 py-4 w-auto  ${theme === 'light' ? 'bg-gray-800' : 'bg-gray-200'}`}>
        <div className="container mx-auto  flex justify-between">
          <img src="https://babynama.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-new.13630e49.webp&w=1920&q=75" alt="babynama" className='md:w-52 lg:w-auto  sm:w-36' />
          <nav className='md:flex'>
              <button
                className="md:hidden "
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isMenuOpen ? (
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.293 5.293a1 1 0 0 0-1.414-1.414L12 10.586 5.121 3.707A1 1 0 1 0 3.707 5.121L10.586 12l-6.879 6.879a1 1 0 1 0 1.414 1.414L12 13.414l6.879 6.879a1 1 0 0 0 1.414-1.414L13.414 12l6.879-6.879z"
                      className={`${theme === 'light' ? 'text-white' : 'text-gray-800'}`}

                    />
                  ) : (
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                      className={`${theme === 'light' ? 'text-white' : 'text-gray-800'}`}
                    />
                  )}
                </svg>
              </button>
              <ul className={`flex space-x-4 gap-x-5 items-center  font-medium text-lg cursor-pointer ${isMenuOpen ? 'block' : 'hidden'} `}>
                <li>
                <a href="/" className = {`${theme === 'light' ? 'text-white' : 'text-gray-800'}`}>
                    Our Services
                </a>
                </li>
                <li>
                <a href="/" className={`${theme === 'light' ? 'text-white' : 'text-gray-800'}`}>
                    Parent Testimonials
                </a>
                </li>
                <li>
                <a href="/" className={`${theme === 'light' ? 'text-white' : 'text-gray-800'}`}>
                    Our Team
                </a>
                </li>
                <li>
                <a href="/" className={`${theme === 'light' ? 'text-white' : 'text-gray-800'}`}>
                    Contact Us
                </a>
                </li>
              </ul>
              <button onClick={handleToggleTheme} className={`ml-6  ${theme === 'light' ? 'bg-gray-800 border border-gray-500 w-12 h-12 border-4 rounded-xl px-3' : ' bg-white border border-gray-400 w-12 h-12 border-4 rounded-xl px-3'} `}>
                      {theme === 'light' ? <RiMoonLine /> : <BiSun />}
              </button>
          </nav>

        </div>
      </header>
    </div>
      
    
  )
}

export default Header

