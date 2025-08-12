import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import myOtherWorkData from '../data/myOtherWorkData';

const MyOtherWork = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 3;
  const containerRef = useRef(null);

  const handlePrev = () => {
    if (startIndex === 0) return;
    animateSlide('right', () => {
      setStartIndex((prev) => Math.max(prev - 1, 0));
    });
  };

  const handleNext = () => {
    if (startIndex + itemsToShow >= myOtherWorkData.length) return;
    animateSlide('left', () => {
      setStartIndex((prev) => Math.min(prev + 1, myOtherWorkData.length - itemsToShow));
    });
  };

  const animateSlide = (direction, onComplete) => {
    const distance = direction === 'left' ? -100 : 100;
    gsap.to(containerRef.current, {
      x: distance,
      opacity: 0,
      duration: 0.3,
      ease: 'power2.out',
      onComplete: () => {
        onComplete();
        gsap.fromTo(
          containerRef.current,
          { x: -distance, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.3, ease: 'power2.out' }
        );
      },
    });
  };

  const visibleWorks = myOtherWorkData.slice(startIndex, startIndex + itemsToShow);

  return (
    <div className='bg-black text-white py-8 px-4'>
      <div className="flex justify-start items-end container mx-auto px-2 md:w:1/2 md:mb-8">
        <hr className="border-t-2 border-gray-500 w-1/12 " />
        <h2 className='md:text-3xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 ml-2'>
          More of My Work
        </h2>
      </div>

      {/* Animated Project Grid */}
      <div ref={containerRef} className='flex justify-center items-center space-x-32 mt-6'>
        {visibleWorks.map((work, index) => (
          <div key={index} className='text-center'>
            <div className='rounded-3xl overflow-hidden w-24 h-24 md:w-64 md:h-56 mx-auto mb-2 hover:scale-105 transition-transform border hover:border-amber-300'>
              <img
                src={work.image}
                alt={work.title}
                className='w-full h-full  object-scale-down hover:object-cover transition-all duration-300'
              />
            </div>
            <h3 className='text-sm font-medium'>{work.title}</h3>
            <p className='text-xs mt-1 px-2'>{work.description}</p>

             <div className="flex justify-center space-x-4 mt-2 text-blue-400 text-xs">
    <a href={work.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
      GitHub
    </a>
    {work.live && (
      <a href={work.live} target="_blank" rel="noopener noreferrer" className="hover:underline">
        Live
      </a>
    )}
  </div>
          </div>
          
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className='flex justify-center items-center mt-6 space-x-8'>
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className='p-2 rounded-full hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition'
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          disabled={startIndex + itemsToShow >= myOtherWorkData.length}
          className='p-2 rounded-full hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition'
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default MyOtherWork;
