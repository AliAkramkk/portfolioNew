import React, { useState } from "react";
import HeroBackground from "../components/HeroBackground"
import dp from '../assets/Images/ali1.png'
import bg from '../assets/Images/bg.jpg'
import bg2 from '../assets/Images/bg2.png'
import ServicesSection from "../components/ServicesSection";
import Modal from "../components/Modal";
import react from '../assets/Images/React.png'
import node from '../assets/Images/node.png'
import mongo from '../assets/Images/mongo.png'
import tailwind from '../assets/Images/tailwind.png'
import TestimonialSlider from "../components/TestimonialSlider";
import ContactForm from "../components/ContactForm";




const Home = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const techStack = [
    { name: "React", image: react },
    { name: "MongoDB", image: mongo },
    { name: "Node.js", image: node },
    { name: "Tailwind", image: tailwind },
  ];

  const links = [
    { label: "GitHub", url: "https://github.com/yourusername" },
    { label: "LinkedIn", url: "https://linkedin.com/in/yourusername" },
    { label: "email", url: "akramkorakkottil@gmail.com" },
    { label: "tel", url: "9946921752" },
  ];


  return (
    <>
    <div className="bg-black relative text-white min-h-screen flex items-center bg-contain bg-no-repeat bg-center  md:bg-cover "style={{ backgroundImage: `url(${bg})` }}>
    <div className="container mx-auto px-8 lg:flex lg:items-center lg:justify-between">
      {/* Text Section */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-4xl md:text-6xl font-mono leading-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-600">
          Frontend <br /> <span>Developer</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          I am <span className="md:text-2xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">Ali Akram Khan </span>– a web developer with a passion for creating
          beautiful and responsive websites.
        </p>
        <div className="relative inline-block mt-6">
  {/* <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500 to-blue-500 -z-10"></div> */}
  <button 
  onClick={handleModalToggle}
  className="px-6 py-3 text-white border-2  border-gradient border-[#f09cf0] bg-gradient rounded-2xl shadow-md hover:bg-transparent transition-all hover:border-[#581258]">
  
   About Me
  </button>
</div>
      </div>
      {/* Image Section */}
      <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center">
        <img
          src={dp}
          alt="Ali Akram Khan"
          className="w-52 h-52 md:w-72 md:h-72 object-contain rounded-full shadow-lg border-4 border-gray-800 bg-gray-800"
        />
      </div>
    </div>
    </div>

    <Modal
        isOpen={isModalOpen}
        onClose={handleModalToggle}
        title="About Me"
        techStack={techStack}
        links={links}
      >
        <p>
          Hello! I am Ali Akram Khan, a passionate web developer with expertise
          in building responsive and visually appealing applications. I
          specialize in the MERN stack and enjoy crafting seamless user
          experiences.
        </p>
      </Modal>

      

      <ServicesSection />

   <ContactForm />

      <footer className="bg-gray-900 text-white py-4 text-center">
        <p>&copy; 2025 Ali Akram Khan. All rights reserved.</p>
      </footer>
      </>
  );
}

export default Home