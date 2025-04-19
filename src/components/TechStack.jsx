import React from "react";
import reactLogo from "../assets/Images/React.png";
import nodeLogo from "../assets/Images/node.png";
import expressLogo from "../assets/Images/express js.png";;
import mongoLogo from "../assets/Images/mongo1.png";;
import githubLogo from "../assets/Images/git.png";;
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
  { src: bootstrap, alt: "bootstrap" },
  { src: nginex, alt: "nginex" },
  { src: service, alt: "service" },
];

const TechStack = () => {
  return (
    <div className="overflow-hidden py-6 bg-black">
      <div className="whitespace-nowrap animate-scroll flex items-start  gap-20 ">
        {techStack.concat(techStack).map((tech, index) => (
          <img
            key={index}
            src={tech.src}
            alt={tech.alt}
            className="h-16 w-auto inline-block grayscale hover:grayscale-0  transition duration-300 rounded-full "
          />
        ))}
      </div>
    </div>
  );
};

export default TechStack;
