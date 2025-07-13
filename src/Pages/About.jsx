import React from 'react';
import mes from '../assets/Images/mes.jpg';
import signet from '../assets/Images/signet.jpg';
import brototype from '../assets/Images/brototype.png';
import freelance from '../assets/Images/freelance.jpg';

const cards = [
  {
    title: 'MES College of Engineering',
    logo: mes,
    heading: '',
    description: 'Completed B.Tech in Electronics & Communication.',
    highlight: 'Worked on IEEE | Robotics mini projects.',
  },
  {
    title: 'Service Engineer',
    logo: signet,
    heading: 'SIGNET ID AUTOMATION',
    description: 'Handled electronic device maintenance & Biometric software.',
    highlight: 'Troubleshooting | Client Meetings | Automation.',
  },
  {
    title: 'Brototype Intern',
    logo: brototype,
    heading: 'Brototype India',
    description: 'Full-stack development internship.',
    highlight: 'Built MERN projects | Team collaboration | Communication cordinator',
  },
  {
    title: 'Freelancer',
    logo: freelance,
    heading: 'Freelance Developer',
    description: 'Help buisness owners to full fill thier digital prescence.',
    highlight: 'E-COMMERCE | UI/UX | SEO | CUSTOM DESIGN | MOBILE RESPONSIVE | FIGMA ',
  },
];

const About = () => {
  return (
    <div className="grid md:grid-cols-4 gap-6 bg-black text-white p-10">
      {cards.map((card, index) => (
        <div
          key={index}
          className="relative group bg-gray-950 rounded-md overflow-hidden shadow-sm hover:shadow-blue-200 
                     h-20 hover:h-44 transition-all duration-500 ease-in-out cursor-pointer "
        >
          {/* Background image */}
          <img
            src={card.logo}
            alt="logo"
            className="absolute inset-0 w-full h-full object-cover opacity-35 z-0"
          />

          {/* Title (always visible) */}
          <div className="absolute top-3 left-3 right-3 text-center text-sm font-mono z-10">
            {card.title}
          </div>

          {/* Hover content */}
          <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col  text-start px-4 pt-10">
            <h2 className="text-base font-mono mt-3">{card.heading}</h2>
            <p className="text-sm font-mono">{card.description}</p>
            <p className="text-sm  mt-2 font-rubik uppercase">{card.highlight}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
