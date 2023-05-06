import React, { useState,useRef } from "react";
import { AiOutlineLeft,AiOutlineRight } from 'react-icons/ai';

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
<div className="flex flex-col ">
<div className="max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 ">
      <h1 className="text-4xl font-bold text-center mb-12">Our Team</h1>
    <div className="absolute inset-0 h-96 mt-52 flex items-center justify-center">
      <div className="">
        <button
          onClick={handlePrevClick}
          className="p-4 rounded-full bg-gray-800 text-white focus:outline-none"
        >
          <AiOutlineLeft className="w-6 h-6" />
        </button>
      </div>
      <div className=" max-w-lg flex flex-nowrap justify-start bottom-0 overflow-x-scroll"  ref={productContainer}>
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className=""
          >
          <div className="shadow-lg rounded-xl border-2 ">
             <div className=" pb-2/3">
              <img className=" h-full w-full " src={member.imageSrc} alt={member.name} />
            </div>
            <div className="px-4 py-3">
              <h3 className="text-lg font-bold mb-1">{member.name}</h3>
              <p className="text-gray-600 mb-1">{member.degree}</p>
              <p className="text-gray-600 text-sm">{member.experience} years of experience</p>
            </div>
          </div>
           
          </div>
        ))}
      </div>
      <div className=" flex items-center justify-between">
        <button
          onClick={handleNextClick}
          className="p-4 rounded-full bg-gray-800 text-white focus:outline-none"
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







  
