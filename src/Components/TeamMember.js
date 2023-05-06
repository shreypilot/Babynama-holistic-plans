/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

const TeamMember = ({ name, degree, experience, imageSrc }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative pb-2/3">
        <img className="absolute h-full w-full object-cover object-center" src={imageSrc} alt={`Photo of ${name}`} />
      </div>
      <div className="px-4 py-3">
        <h3 className="text-lg font-bold mb-1">{name}</h3>
        <p className="text-gray-600 mb-1">{degree}</p>
        <p className="text-gray-600 text-sm">{experience} years of experience</p>
      </div>
    </div>
  );
};

export default TeamMember;

