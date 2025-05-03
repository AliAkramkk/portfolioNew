import React from 'react';
import mes from '../assets/Images/mes.jpg';
import signet from '../assets/Images/signet.jpg';
import brototype from '../assets/Images/brototype.png';
import freelance from '../assets/Images/freelance.jpg';

const cards = [
  {
    title: 'Electronics Engineer',
    logo: mes,
    heading: 'MES College of Engineering',
    description: 'Completed B.Tech in Electronics & Communication.',
    highlight: 'Worked on IoT & robotics mini projects.',
  },
  {
    title: 'Service Engineer',
    logo: signet,
    heading: 'Electronics Service Pvt Ltd',
    description: 'Handled electronic device maintenance & field work.',
    highlight: 'Troubleshooting and client-side installations.',
  },
  {
    title: 'Brototype Intern',
    logo: brototype,
    heading: 'Brototype India',
    description: 'Full-stack development internship.',
    highlight: 'Built mini MERN projects & team collaboration.',
  },
  {
    title: 'Freelancer',
    logo: freelance,
    heading: 'Freelance Developer',
    description: 'Websites for small businesses.',
    highlight: 'UI/UX & mobile responsive design.',
  },
];

const About = () => {
  return (
    <div className="grid md:grid-cols-4 gap-6 bg-black text-white p-10">
      {cards.map((card, index) => (
        <div
          key={index}
          className="relative group bg-gray-950 rounded-md overflow-hidden shadow-sm shadow-blue-200 
                     h-20 hover:h-64 transition-all duration-500 ease-in-out cursor-pointer even:md:-mt-10"
        >
          {/* Background image */}
          <img
            src={card.logo}
            alt="logo"
            className="absolute inset-0 w-full h-full object-cover opacity-15 z-0"
          />

          {/* Title (always visible) */}
          <div className="absolute top-3 left-3 right-3 text-center text-sm font-semibold z-10">
            {card.title}
          </div>

          {/* Hover content */}
          <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center px-4 pt-10">
            <h2 className="text-base font-bold mb-1">{card.heading}</h2>
            <p className="text-sm">{card.description}</p>
            <p className="text-sm mt-2 italic">{card.highlight}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
