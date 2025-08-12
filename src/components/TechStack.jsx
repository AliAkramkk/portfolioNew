import React from "react";
import reactLogo from "../assets/Images/React.png";
import nodeLogo from "../assets/Images/node.png";
import expressLogo from "../assets/Images/express js.png";
import mongoLogo from "../assets/Images/mongo1.png";
import githubLogo from "../assets/Images/git.png";
import tailwindLogo from "../assets/Images/tailwind.png";
import wasLogo from "../assets/Images/AWS.png";
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
];

const TechStack = () => {
  return (
    <div className="relative overflow-hidden bg-black w-full h-64">
      <div className="absolute top-0 left- w-[100%] h-[100%]  animate-scroll backface-visible flex gap-16 items-center">
        {techStack.concat(techStack).map((tech, index) => (
          <img
            key={index}
            src={tech.src}
            alt={tech.alt}
            className="h-16 w-auto grayscale hover:grayscale-0 skew-x-6   transition duration-300 rounded-full"
          />
        ))}
      </div>
    </div>
  );
};

export default TechStack;
