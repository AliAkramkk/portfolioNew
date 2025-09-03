import React from "react";
import reactLogo from "../assets/Images/React.png";
import nodeLogo from "../assets/Images/node.png";
import expressLogo from "../assets/Images/express js.png";
import mongoLogo from "../assets/Images/mongo1.png";
import githubLogo from "../assets/Images/git.png";
import tailwindLogo from "../assets/Images/tailwind.png";
import awsLogo from "../assets/Images/AWS.png";
import figmaLogo from "../assets/Images/figma.png";
import nginxLogo from "../assets/Images/nginex.png";
import bootstrapLogo from "../assets/Images/bootstrap.jpg";
import vercelLogo from "../assets/Images/vercel.png"; // replace with actual Vercel logo if available
import nextLogo from "../assets/Images/next.png"; // replace with actual Vercel logo if available

const categories = {
  Frontend: [
    { src: reactLogo, alt: "React" },
    { src: tailwindLogo, alt: "Tailwind CSS" },
    { src: bootstrapLogo, alt: "Bootstrap" },
    { src: nextLogo, alt: "Next.js" },
  ],
  Backend: [
    { src: nodeLogo, alt: "Node.js" },
    { src: expressLogo, alt: "Express.js" },
    { src: mongoLogo, alt: "MongoDB" },
  ],
  "DevOps & Tools": [
    { src: githubLogo, alt: "GitHub" },
    { src: awsLogo, alt: "AWS" },
    { src: nginxLogo, alt: "Nginx" },
    { src: vercelLogo, alt: "Vercel" },
  ],
  Design: [{ src: figmaLogo, alt: "Figma" }],
};

const TechStack = () => {
  return (
    <section className="bg-black py-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-white">Tech Stack</h2>
        <p className="text-gray-400 mt-2">
          Technologies I use to design, build, and deploy scalable applications
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        {Object.entries(categories).map(([category, techs], idx) => (
          <div key={idx}>
            <h3 className="text-2xl font-semibold text-amber-400 mb-6">{category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {techs.map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md 
                             hover:shadow-amber-400/50 transition-transform hover:scale-105"
                >
                  <img
                    src={tech.src}
                    alt={tech.alt}
                    className="h-16 w-16 mb-3 grayscale hover:grayscale-0 transition duration-300"
                  />
                  <p className="font-medium">{tech.alt}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
