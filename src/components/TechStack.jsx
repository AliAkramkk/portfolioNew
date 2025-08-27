import React from "react";
import reactLogo from "../assets/Images/React.png";
import nodeLogo from "../assets/Images/node.png";
import expressLogo from "../assets/Images/express js.png";
import mongoLogo from "../assets/Images/mongo1.png";
import githubLogo from "../assets/Images/git.png";
import tailwindLogo from "../assets/Images/tailwind.png";
import wasLogo from "../assets/Images/AWS.png";
import figma from "../assets/Images/figma.png";
import nginex from "../assets/Images/nginex.png";
import bootstrap from "../assets/Images/bootstrap.jpg";
import service from "../assets/Images/service.jpg";

const techStack = [
  { src: reactLogo, alt: "React" },
  { src: nodeLogo, alt: "Node.js" },
  { src: expressLogo, alt: "Express" },
  { src: mongoLogo, alt: "MongoDB" },
  { src: githubLogo, alt: "GitHub" },
  { src: tailwindLogo, alt: "Tailwind CSS" },
  { src: wasLogo, alt: "WAS" },
  { src: bootstrap, alt: "Bootstrap" },
  { src: nginex, alt: "Nginx" },
  { src: service, alt: "Service" },
  { src: figma, alt: "figma" },
];

const TechStack = () => {
  return (
    <div className="relative overflow-hidden bg-black w-full h-64 m-">
      {/* <div className="absolute top-0 left- w-[100%] h-[100%]  animate-scroll backface-visible flex gap-16 items-center">
        {techStack.concat(techStack).map((tech, index) => (
          <img
            key={index}
            src={tech.src}
            alt={tech.alt}
            className="h-16 w-auto grayscale hover:grayscale-0    transition duration-300 rounded-full"
          />
        ))}
      </div> */}
      <div className="flex justify-center gap-6 m-10 ">
        <div className="w-26 h-16 bg-[#fae4ca] rounded-2xl p-2 text-center shadow-md -rotate-2 mt-10 ">
          <h2 className="md:font-stretch-50% md:text-4xl">React</h2>
          {/* <p className="text-xs md:text-sm mt-2">Discover your brand voice</p> */}
        </div>
        <div className="w-26 h-16 bg-[#fde68a] rounded-2xl p-4 text-center shadow-md z-10">
          <h2 className="md:font-stretch-50% md:text-4xl">Node js</h2>
        </div>
        <div className="w-26 h-16 bg-[#fca5a5] rounded-2xl p-4 text-center shadow-md transform rotate-3 mt-5">
       <h2 className="md:font-stretch-50% md:text-4xl">Express js</h2>
        </div>
        <div className="w-26 h-16 bg-[#fde68a] rounded-2xl p-2 text-center shadow-md z-10">
          <h2 className="md:font-stretch-50% md:text-4xl ">MongoDb</h2>
        </div>
         <div className="w-26 h-16 bg-[#fae4ca] rounded-2xl p-2 text-center shadow-md -rotate-2 mt-5">
          <h2 className="md:font-stretch-50% md:text-4xl">Figma</h2>
          {/* <p className="text-xs md:text-sm mt-2">Discover your brand voice</p> */}
        </div>
         <div className="w-26 h-16 bg-[#fde68a] rounded-2xl p-4 text-center shadow-md z-10">
          <h2 className="md:font-stretch-50% md:text-4xl">AWS</h2>
        </div>
      </div>

       <div className="flex justify-center gap-6 m-10 ">
        <div className="w-26 h-16 bg-[#fae4ca] rounded-2xl p-4 text-center shadow-md transform -rotate-1">
        <h2 className="md:font-stretch-50% md:text-3xl">Vercel</h2>
        </div>
        <div className="w-26 h-16 bg-[#fde68a] rounded-2xl p-4 text-center shadow-md z-10">
          <h2 className="md:font-stretch-50% md:text-4xl">Stripe</h2>
        </div>
        <div className="w-26 h-16 bg-[#fca5a5] rounded-2xl p-4 text-center shadow-md transform rotate-6">
         <h2 className="md:font-stretch-50% md:text-3xl">Nextjs</h2>
        </div>
        <div className="w-26 h-16 bg-[#fde68a] rounded-2xl p-4 text-center shadow-md z-10">
          <h2 className="md:font-stretch-50% md:text-4xl">GoDaddy</h2>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
