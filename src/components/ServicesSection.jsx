import React from 'react';
import lap from '../assets/Images/lap1.png';

const ServicesSection = () => {
  return (
    <section className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-2xl md:text-4xl md:text-center font-mono text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
          My Work
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-3 relative">
        {/* Center Line */}
        <div className="hidden md:block absolute inset-0 w-0.5 bg-gray-500 mx-auto"></div>

        {/* Project 1 */}
        <div className="md:absolute flex flex-row md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 md:w-1/2">
          <img src={lap} alt="laptop" className="w-40  md:w-96" />
          <p className="font-thin p-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, fugit obcaecati! Atque vitae consectetur est praesentium? Quis libero iusto soluta?
          </p>
          <div
      className="hidden md:block my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50">
      </div>
        </div>

        {/* Project 2 */}
        <div className=" flex flex-row md:flex-row items-center space-y-4 md:mt-96 md:space-x-4">
          <img src={lap} alt="laptop" className="w-40 md:w-96" />
          <p className="font-thin p-3">
            145Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, fugit obcaecati! Atque vitae consectetur est praesentium? Quis libero iusto soluta?
          </p>
        </div>

        {/* Project 3 */}
        <div className="flex flex-row md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <img src={lap} alt="laptop" className="w-40 md:w-96" />
          <p className="font-thin p-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, fugit obcaecati! Atque vitae consectetur est praesentium? Quis libero iusto soluta?
          </p>
        </div>

        {/* Project 4 */}
        <div className=" hidden flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <img src={lap} alt="laptop" className="w-40 md:w-96" />
          <p className="font-bold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, fugit obcaecati! Atque vitae consectetur est praesentium? Quis libero iusto soluta?
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;



// <div className="container mx-auto px-6">
// {/* Section Heading */}
// <h2 className="text-2xl md:text-4xl font-mono text-center py-5 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
//   My Services
// </h2>

// {/* Services Container with flex layout */}
// <div className="flex flex-col  justify-between space-y-12 md:space-y-0 md:space-x-12">
//   {/* Left Column */}
//   <div className="flex flex-col space-y-12 md:w-1/2">
//     {/* Service 1 */}
//     <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
//       <div className="text-blue-400 text-3xl">💻</div>
//       <div>
//         <h3 className="text-2xl font-semibold">Website Development</h3>
//         <p className="text-gray-400 mt-2">
//           I create websites based on your ready-made design. Whether it’s
//           a landing page or a business card website, I will make it look
//           great and work smoothly on any device.
//         </p>
//       </div>
//     </div>
//     <div
//     className="h-[250px] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent border-2 border-white opacity-20 dark:opacity-100"
//   ></div>
//     <div className="flex flex-col space-y-12  md:mt-48  md:ml-96">
//     {/* Service 2 */}
//     <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
//       <div className="text-blue-400 text-3xl">🎨</div>
//       <div>
//         <h3 className="text-2xl font-semibold">Web Design</h3>
//         <p className="text-gray-400 mt-2">
//           I can design your website from scratch. I create modern, simple,
//           and user-friendly designs that match your brand and goals.
//         </p>
//       </div>
//       </div>

//     </div>

//     {/* Service 3 */}
//     <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
//       <div className="text-blue-400 text-3xl">🔧</div>
//       <div>
//         <h3 className="text-2xl font-semibold">WordPress Development</h3>
//         <p className="text-gray-400 mt-2">
//           I build websites on WordPress, making them easy to update and
//           manage. It’s a great choice for blogs, small businesses, or
//           portfolios.
//         </p>
//       </div>
//     </div>
//   </div>

//   {/* Vertical Line */}
//   <div className="hidden md:block border-l-2 border-white h-full">
//   {/* Right Column */}
 
//   </div>
// </div>
// </div>