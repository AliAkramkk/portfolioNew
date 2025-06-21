import React from 'react'
import myOtherWorkData from '../data/myOtherWorkData'

const MyOtherWork = () => {
  return (
      <div className='bg-black text-white py-8 px-4'>
         <div className="flex justify-start  items-end container mx-auto px-2 md:w:1/2 md:mb-8">
      <hr className="border-t-2 border-gray-500 w-1/12 " />
      <h2 className='md:text-3xl  font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 '>More of My Work</h2>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-12 mt-6'>
        {myOtherWorkData.map((work, index) => (
          <div key={index} className='text-center'>
            <div className='rounded-tr-3xl rounded-bl-3xl border  overflow-hidden w-20 h-20 md:w-56 md:h-48 mx-auto mb-2'>
              <img src={work.image} alt={work.title} className='w-full h-full object-cover hover:scale-150' />
            </div>
            <h3 className='text-sm font-medium'>{work.title}</h3>
            <p className='text-xs mt-1'>{work.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOtherWork