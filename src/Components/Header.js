
import React from 'react'
import { useState,useEffect } from 'react';
import {BiSun } from 'react-icons/bi';
import {RiMoonLine } from 'react-icons/ri';
import { toggleTheme } from '../utils/themeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



// Header component for header section: Logo, Nav Items
const Header = () => {
  // use useState for user logged in or logged out
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = useSelector((state) => state.theme);
    const dispatch = useDispatch();
    const handleToggleTheme = () => {
        dispatch(toggleTheme());
      };

  return (
    <div className={`  ${theme === 'light' ? 'bg-gray-800' : 'bg-gray-100'} md:shadow-lg md:h-20 fixed top-0 left-0 right-0 ${isMenuOpen ? " " : "h-20"
  } `}>
      <div className="md:flex ">
        <div className="flex justify-between md:w-full">
        <div className='p-4'>
        <Link to='/'>
            <img src="https://babynama.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-new.13630e49.webp&w=1920&q=75" alt="babynama" className='md:w-52 lg:w-auto  sm:w-36' />
          </Link>
          </div>
          <button onClick={handleToggleTheme} className={`md:hidden mt-4 ${isMenuOpen ? "my-10 " : "my-0"
          } md:mx-6 md:my-4  ml-5 ${theme === 'light' ? 'bg-gray-800  border-gray-500 w-12 h-12 border-4 rounded-xl px-3' : ' bg-white  border-gray-400 w-12 h-12 border-4 rounded-xl px-3'} `}>
                              {theme === 'light' ? <RiMoonLine /> : <BiSun />}
          </button>
          <button
            className="md:hidden "
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className={`${theme === 'light' ? 'text-white' : 'text-gray-800'} w-6 h-6 fill-current`}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.293 5.293a1 1 0 0 0-1.414-1.414L12 10.586 5.121 3.707A1 1 0 1 0 3.707 5.121L10.586 12l-6.879 6.879a1 1 0 1 0 1.414 1.414L12 13.414l6.879 6.879a1 1 0 0 0 1.414-1.414L13.414 12l6.879-6.879z"
                />
              ) : (
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                />
              )}
            </svg>
          </button>
        </div>
        <ul
          className={`${isMenuOpen ? "block" : "hidden"
            } md:flex md:items-center md:justify-evenly w-full mt-4 md:mt-0   text-gray-700 capitalize text-xl font-bold`}
        >
           <li className='md:py-0 py-10 md:shadow-none shadow-lg pl-2'>
                <Link to="/service" className = {`${theme === 'light' ? 'text-white' : 'text-gray-800'}`}>
                    Our Services
                </Link>
                </li>
                <li className='md:py-0 py-10  md:shadow-none shadow-lg pl-2'>
                <Link to="/testimonal" className={`${theme === 'light' ? 'text-white' : 'text-gray-800'}`}>
                    Parent Testimonials
                </Link>
                </li>
                <li className='md:py-0 py-10  md:shadow-none shadow-lg pl-2'>
                <Link to ="/team" className={`${theme === 'light' ? 'text-white' : 'text-gray-800'}`}>
                    Our Team
                </Link>
                </li>
                <li className='md:py-0 py-10  md:shadow-none shadow-lg pl-2'>
                <Link to="/contact" className={`${theme === 'light' ? 'text-white' : 'text-gray-800'}`}>
                    Contact Us
                </Link>
                </li>
          
                </ul>
                <button onClick={handleToggleTheme} className={` sm:block hidden  ${isMenuOpen ? " " : ""
          } md:mx-6 md:my-4  ml-5 ${theme === 'light' ? 'bg-gray-800  border-gray-500 w-12 h-12 border-4 rounded-xl px-3' : ' bg-white  border-gray-400 w-12 h-12 border-4 rounded-xl px-3'} `}>
                              {theme === 'light' ? <RiMoonLine /> : <BiSun />}
      </button>
      </div>
    </div>


  );
};

export default Header;