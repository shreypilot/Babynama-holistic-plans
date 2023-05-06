import React from 'react';
import TeamMember from './TeamMember';

const Team = () => {
  const teamMembers = [
    { name: '', degree: 'MD', experience: 5, imageSrc: 'https://babynama.com/_next/static/media/drPriyanka.ad2391a7.webp' },
    { name: 'Jane Doe', degree: 'DO', experience: 10, imageSrc: 'https://babynama.com/_next/static/media/drNikita.76e689a4.webp' },
    { name: 'Bob Smith', degree: 'MD', experience: 8, imageSrc: 'https://babynama.com/_next/static/media/drDhanya.687eb8d9.webp' },
    { name: 'Sally Johnson', degree: 'DO', experience: 3, imageSrc: 'https://babynama.com/_next/static/media/drAnupriya.b9a0e02d.webp' },
    { name: 'John Doe', degree: 'MD', experience: 5, imageSrc: 'https://via.placeholder.com/150' },
    { name: 'Jane Doe', degree: 'DO', experience: 10, imageSrc: 'https://via.placeholder.com/150' },
    { name: 'Bob Smith', degree: 'MD', experience: 8, imageSrc: 'https://via.placeholder.com/150' },
    { name: 'Sally Johnson', degree: 'DO', experience: 3, imageSrc: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} name={member.name} degree={member.degree} experience={member.experience} imageSrc={member.imageSrc} />
        ))}
      </div> */}
    </div>
  );
};

export default Team;
