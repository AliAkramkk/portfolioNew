import React from 'react'
import myOtherWorkData from '../data/myOtherWorkData'

const MyOtherWork = () => {
  return (
      <div className='bg-black text-white py-8 px-4'>
      <h2 className='text-4xl font-semibold mb-6'>More of My Work</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12'>
        {myOtherWorkData.map((work, index) => (
          <div key={index} className='text-center'>
            <div className='rounded-t-full overflow-hidden w-40 h-40 mx-auto mb-2'>
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