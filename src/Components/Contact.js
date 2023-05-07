import React from 'react';
import { useSelector } from 'react-redux';
import { useState } from "react";
import {AiTwotonePhone} from 'react-icons/ai';
import {FiMail} from 'react-icons/fi';

function ContactForm() {
  const theme = useSelector((state) => state.theme);
  const [message, setMessage] = useState(false);
  const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
        setInputValue('');
    }
  return (
    <div className={` ${theme === 'light' ? 'bg-gray-700' : 'bg-gray-50'} flex flex-col h-screen md:flex-row items-center justify-center mt-10  mx-auto py-24 px-4 sm:px-6 lg:py-24 lg:px-8`}>
    <div className="md:w-1/2 mx-4">
        <img
          className="object-cover"
          src="https://foodfire-app.netlify.app/Contact-Us.13c5d28a.png"
          alt="Contact us"
        />
      </div>
      <div className="md:w-1/2 mx-4">
        <form onSubmit={handleSubmit} className={`shadow-md rounded px-8 pt-6 pb-8 mb-4  ${theme === 'light' ? 'bg-gray-800' : 'bg-white'} `} >
          <h2 className={`mb-4 text-2xl font-bold text-center  ${theme === 'light' ? 'text-white' : 'text-gray-950'}`}>Contact Us</h2>
          <div className="mb-4  ">
            <label className={`block  ${theme === 'light' ? 'text-white' : 'text-gray-700'} font-bold mb-2 `} htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              required
              placeholder="Enter your name"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className={`block  font-bold  ${theme === 'light' ? 'text-white' : 'text-gray-700'} mb-2" `} htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              required
              placeholder="Enter your email"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className={`block  ${theme === 'light' ? 'text-white' : 'text-gray-700'} font-bold mb-2`} htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows="5"
              placeholder="Enter your message"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <div className="flex flex-col  items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send Message
            </button>
            {message && <span className={` ${theme === 'light' ? 'text-white' : 'text-gray-700'} pt-4`}>Thanks for contacting Babynama, We will reply ASAP.</span>}
          </div>
          <div className="flex gap-10 text-sm font-light">
        <div className="flex">
          <AiTwotonePhone
            className={`font-bold text-xl  cursor-pointer  ${theme === 'light' ? 'text-blue-300' : 'text-gray-950'}`}
            onClick={() => window.location.href = 'tel:+917303786959'}

          />
          <p style={{ display: 'none' }}>
            +91 7303786959
          </p>
        </div>
        <div className="flex box-border gap-1">
          <FiMail
            className="mt-1 text-xl  text-red-800 cursor-pointer"
            onClick={() => window.location.href = 'mailto:contact@gangahealth.com'}

          />
          <p style={{ display: 'none' }}>
            contact@gangahealth.com
          </p>
        </div>
      </div>
        </form>
      </div>
      
    </div>
  );
}

export default ContactForm;

