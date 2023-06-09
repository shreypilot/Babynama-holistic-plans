import React, { useState,useRef } from "react";
import { AiOutlineLeft,AiOutlineRight } from 'react-icons/ai';
import { useSelector } from 'react-redux';

 const teamMembers = [
  { id:1, name: 'Dr.Priyanka Tiwari', degree: 'MD', experience: 5, imageSrc: 'https://babynama.com/_next/static/media/drPriyanka.ad2391a7.webp' },
  {id:2, name: ' Dr.Nikita', degree: 'DO', experience: 10, imageSrc: 'https://babynama.com/_next/static/media/drNikita.76e689a4.webp' },
  { id:3, name: 'Dr.Dhanya', degree: 'MD', experience: 8, imageSrc: 'https://babynama.com/_next/static/media/drDhanya.687eb8d9.webp' },
  {id:4, name: 'Dr.Anupriya', degree: 'DO', experience: 3, imageSrc: 'https://babynama.com/_next/static/media/drAnupriya.b9a0e02d.webp' },
  { id:5,name: 'Dr.Sumitra', degree: 'MD', experience: 5, imageSrc: 'https://babynama.com/_next/static/media/drSumitraM.d308148d.webp' },
  { id:6,name: 'Dr.Rajat', degree: 'DO', experience: 10, imageSrc: 'https://babynama.com/_next/static/media/drRajat.eebe8bbf.webp' },
  { id:7, name: 'Dr.Priyanka Tiwari', degree: 'MD', experience: 5, imageSrc: 'https://babynama.com/_next/static/media/drPriyanka.ad2391a7.webp' },
  {id:8, name: ' Dr.Nikita', degree: 'DO', experience: 10, imageSrc: 'https://babynama.com/_next/static/media/drNikita.76e689a4.webp' },
  
];

const Team = () => {

  const theme = useSelector((state) => state.theme);


  const productContainer = useRef(null);

  const handlePrevClick = () => {
    const width = productContainer.current?.clientWidth || 0;
    productContainer.current.scrollLeft -= width;
  };

  const handleNextClick = () => {
    const width = productContainer.current?.clientWidth || 0;
    productContainer.current.scrollLeft += width;
  };

  return (

<div className={` ${theme === 'light' ? 'bg-gray-700' : 'bg-gray-50'}  `}>
<div className="max-w-screen-xl mx-auto py-24 px-4 sm:px-6 lg:py-24 lg:px-8">
      <h1 className={`text-4xl font-bold text-center  ${theme === 'light' ? 'text-gray-50' : 'text-gray-950'}  `}>Our Team</h1>
    <div className="flex items-center justify-center">
      <div className="">
        <button
          onClick={handlePrevClick}
          className={`p-4 rounded-full ${theme === 'light' ? 'bg-gray-800 text-white' : 'text-gray-950 bg-gray-200'}   focus:outline-none`}
        >
          <AiOutlineLeft className="w-6 h-6" />
        </button>
      </div>
      <div className="flex justify-start shadow-gray-600 pt-32 px-1 items-center rounded-lg bottom-0 overflow-hidden md:w-96" ref={productContainer}>
    {teamMembers.map((member, index) => (
      <div key={index} className="py-2 h-full rounded-lg">
        <div className="shadow-lg rounded-lg max-w-screen-2xl md:w-96 h-96 md:h-full">
          <div className="pb-2/3">
            <img className="h-64 md:h-96 w-full md:w-96 object-cover rounded-lg border-2 border-blue-300" src={member.imageSrc} alt={member.name} />
          </div>
          <div className="px-4 py-12">
            <h3 className={` ${theme === 'light' ? 'text-gray-50' : 'text-gray-950'} text-lg font-bold mb-1`}>{member.name}</h3>
            <p className={` mb-1 ${theme === 'light' ? 'text-gray-100' : 'text-gray-900'}`}>{member.degree}</p>
            <p className={`text-sm ${theme === 'light' ? 'text-gray-100' : 'text-gray-800'}`}>{member.experience} years of experience</p>
          </div>
        </div>
      </div>
    ))}
</div>

      <div className=" flex items-center justify-between">
        <button
          onClick={handleNextClick}
          className={`p-4 rounded-full ${theme === 'light' ? 'bg-gray-800 text-white' : 'text-gray-950 bg-gray-200'}   focus:outline-none`}
        >
          <AiOutlineRight className="w-6 h-6" />
        </button>
      </div>
      </div>
    </div>
</div>

  );
};
export default Team;







  
