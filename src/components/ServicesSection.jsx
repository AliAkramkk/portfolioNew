import React from 'react';
import lap from '../assets/Images/lap1.png';
import lap2  from '../assets/Images/lap2.png';
import lap3  from '../assets/Images/lap4.png';
import bg from '../assets/Images/bg 1.jpg';
import TestimonialSlider from './TestimonialSlider';
import { motion } from "framer-motion";   



const ServicesSection = () => {
  return (
    <>
    <section className="bg-gray-900 text-white py-10 bg-cover"style={{ backgroundImage: `url(${bg})` }}>
      <div className="flex justify-start  items-end container mx-auto px-6 md:w:1/2 mb-4">
      <hr className="border-t-2 border-gray-500 w-1/12" />
        <h1 className="text-xl md:text-2xl md:text-center font-mono text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
          Some of my latest work
        </h1>
        {/* <hr className="border-t-2 border-gray-500 w-1/3" /> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-3 relative">
        {/* Center Line */}
        {/* <div className="hidden md:block absolute top-[-8px] w-3 h-3 rounded-full bg-gray-500 mx-auto"></div> */}
        <div className="hidden md:block absolute inset-0 w-0.5 bg-gray-500 mx-auto"></div>

        {/* Project 1 */}
        <div className="md:absolute flex flex-row md:flex-row items-center space-y-4 md:space-y-0 md:w-1/2">
        <a href="https://www.skepinteriors.com/" target="_blank" rel="noopener noreferrer">
        <motion.div
  className="relative"
  whileHover={{ rotate: [0, 2, -2, 2, 0], scale: 1.1 }}
  transition={{ duration: 0.5, ease: "easeInOut" }}
>
          <img src={lap} alt="laptop" className="w-40  md:w-[900px] hover:" />
          </motion.div>
          </a>
          <p className="font-thin p-3 md:bg-black  md:space-x-1 md:w-[400px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, fugit obcaecati! Atque vitae consectetur est praesentium? Quis libero iusto soluta?
          </p>
          <hr className="hidden md:block space-x-0 border-t-2 border-gray-500 w-1/2 transform -translate-y-1" />
          <a href="https://www.skepinteriors.com/" target="_blank" rel="noopener noreferrer">
          <div className="hidden md:block absolute right-0 bg-gray-200 rounded-full w-3 h-3 transform translate-x-2 translate-y-10 hover:bg-gradient-to-r from-pink-500 to-blue-500">
         
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 hover:opacity-100 transition-opacity duration-300 text-sm text-white bg-black p-4 w-32 rounded">
          visit Skep Interiors
      </div>
      </div>
          <div
      className="hidden md:block my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50">
      </div>
      </a>
        </div>
      
        {/* Project 2 */}
        <div className=" flex flex-row md:flex-row items-center space-y-4 md:mt-96 ">
        <a href="https://www.goldenwater-emirates.com/" target="_blank" rel="noopener noreferrer">
        <motion.div
  className="relative"
  whileHover={{ rotate: [0, 2, -2, 2, 0], scale: 1.1 }}
  transition={{ duration: 0.5, ease: "easeInOut" }}
>
          <img src={lap3} alt="laptop" className="w-40 md:w-[900px]" />
          </motion.div>
          </a>
          <p className="font-thin p-3 md:bg-black md:rounded-xl md:w-[400px]">
            145Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, fugit obcaecati! Atque vitae consectetur est praesentium? Quis libero iusto soluta?
          </p>
          <hr className="hidden md:block space-x-0 border-t-2 border-gray-500 w-1/2 transform translate-x-5" />
          <a href="https://www.goldenwater-emirates.com/" target="_blank" rel="noopener noreferrer">
          <div className="hidden md:block absolute  bg-gray-200 rounded-full w-3 h-3 right-0 transform -translate-x-[667px] -translate-y-1 hover:bg-gradient-to-r from-pink-500 to-blue-500">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 hover:opacity-100 transition-opacity duration-300 text-sm text-white bg-black p-4 w-32 rounded font-semibold">
   visit GoldenWater Cleaning
      </div>
          </div>
          </a>
        </div>

        {/* Project 3 */}
        <div className="flex flex-row md:flex-row items-center space-y-4 md:space-y-4 md:space-x-0 ">
        <hr className="hidden md:block space-x-0 border-t-2 border-gray-500 w-1/2 transform -translate-x-5 -translate-y-[1px]" />
       <div className="relative">
  {/* The clickable dot */}
  <a href="https://theclientsmaker.com/" target="_blank" rel="noopener noreferrer">
    <div className="hidden md:block absolute -right-90 bg-gray-200 rounded-full w-3 h-3 transform -translate-x-[155px] -translate-y-4 hover:bg-gradient-to-r from-pink-500 to-blue-500">
      {/* Tooltip or label that appears on hover */}
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 hover:opacity-100 transition-opacity duration-300 text-sm text-white bg-black p-4 w-32 rounded font-semibold">
   visit ClientsMaker
      </div>
    </div>
  </a>
</div>

         
          <p className="font-thin p-3 md:bg-black md:rounded-xl md:w-[400px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, fugit obcaecati! Atque vitae consectetur est praesentium? Quis libero iusto soluta?
          </p>
          <a href="https://theclientsmaker.com/" target="_blank" rel="noopener noreferrer">
          <motion.div
  className="relative"
  whileHover={{ rotate: [0, 2, -2, 2, 0], scale: 1.1 }}
  transition={{ duration: 0.5, ease: "easeInOut" }}
>
          <img src={lap2} alt="laptop" className="w-40 md:w-[900px]" />
          </motion.div>
          </a>
        </div>

        {/* Project 4 */}
        {/* <div className=" hidden flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <img src={lap} alt="laptop" className="w-40 md:w-96" />
          <p className="font-bold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, fugit obcaecati! Atque vitae consectetur est praesentium? Quis libero iusto soluta?
          </p>
        </div> */}
      </div>
    </section>
      <TestimonialSlider />
      </>
  );
};

export default ServicesSection;

