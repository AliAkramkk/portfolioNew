
import React, { useState } from "react";
import HeroBackground from "../components/HeroBackground";
import dp from "../assets/Images/aligpt.png";
import bg from "../assets/Images/bg.jpg";
import bg2 from "../assets/Images/bg2.png";
import ServicesSection from "../components/ServicesSection";
import { motion } from "framer-motion";
import Modal from "../components/Modal";
import react from "../assets/Images/React.png";
import node from "../assets/Images/node.png";
import mongo from "../assets/Images/mongo.png";
import tailwind from "../assets/Images/tailwind.png";
import TestimonialSlider from "../components/TestimonialSlider";
import ContactForm from "../components/ContactForm";
import Particles from "../components/Particles";
import TechStack from "../components/TechStack";
import About from "./About";
import MyOtherWork from "../components/MyOtherWork";

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
      <div className=" relative  text-white min-h-screen flex items-center  ">
        {/* Particles Background */}
        <div
          className="bg-black    "
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
          }}
        >
          <Particles
            particleColors={["#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.2}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={true}
            particleHoverFactor={1}
            sizeRandomness={1}
          />
        </div>
        <div className="container mx-auto px-8 lg:flex lg:items-center lg:justify-between">
          {/* Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-mono leading-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-600">
              Full-Stack <br /> <span>Developer</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-300">
              I am{" "}
              <span className="md:text-2xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
                Ali Akram Khan{" "}
              </span>
              – a web developer with a passion for creating beautiful and
              responsive websites.
            </p>
            <div className="relative inline-block mt-6">
              {/* <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500 to-blue-500 -z-10"></div> */}
       <div className="group relative inline-block p-[2px] rounded-2xl bg-gradient-to-r from-[#f09cf0] via-[#581258] to-[#f09cf0] bg-[length:400%_400%] animate-none group-hover:animate-borderSweep">
  <button
    onClick={handleModalToggle}
    className="relative z-10 px-6 py-3 bg-black text-white rounded-2xl w-full h-full hover:scale-105 hover:bg-white hover:text-black hover:border-2 hover:border-pink-500 transition-all duration-300 ease-in-out"
  >
    About Me
  </button>
</div>
            </div>
          </div>
          {/* Image Section */}
          <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center">
            <motion.img
              src={dp}
              alt="Ali Akram Khan"
              className="w-52 h-52 md:w-72 md:h-72 object-contain rounded-full shadow-lg border-4 border-gray-950 bg-black"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
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
          Hello! I am Ali Akram Khan,I started my journey as a web developer Two
          years ago, driven by a passion for problem-solving and creating
          interactive web experiences. I specialize in the MERN stack, and I've
          worked on projects ranging from small startups to large-scale
          applications. My mission is to build efficient, scalable, and
          user-friendly solutions that make a real impact.
        </p>
      </Modal>

      <TechStack />

      <About />
      <ServicesSection />
      <MyOtherWork />
      {/* <TestimonialSlider /> */}
      <ContactForm />
      <hr className="border-t-2 border-gray-500 w-full" />
      <footer className="bg-black text-white p-4 flex items-center justify-center space-x-4">
  <span className="font-playwrite">ali akram</span>
  <div className="w-px h-5 bg-gray-400 "></div>
  <p className="font-thin">&copy; 2023. All rights reserved.</p>
</footer>
    </>
  );
};

export default Home;
