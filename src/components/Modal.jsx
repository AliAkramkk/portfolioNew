import React from "react";
import link from '../assets/Images/linked.png';
import git from '../assets/Images/git.png';
import resumePDF from '../assets/Resume/resume.pdf'; // Add your resume file in the assets folder

const Modal = ({ isOpen, onClose, title, techStack, links, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-gray-900 text-white rounded-lg shadow-lg p-8 w-11/12 md:w-1/2 border-2 border-gray-800 skew-x-1">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div>{children}</div>

        {/* Tech Stack Section */}
        <div className="grid grid-cols-4 gap-1 mb-6">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center space-y-2"
            >
              <img
                src={tech.image}
                alt={tech.name}
                className="w-12 h-12 md:w-16 md:h-16"
              />
              <span className="text-sm md:text-base">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Connect with Me Section */}
        <div className="text-center mt-8">
          <h3 className="text-xl font-semibold text-pink-500 mb-4">
            Connect with Me
          </h3>
          <div className="flex flex-wrap justify-center items-center space-x-6">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/aliakramkh/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:opacity-80 hover:transition-transform duration-500 ease-in-out transform hover:scale-110"
            >
              <img
                src={link}
                alt="LinkedIn"
                className="w-8 h-8 rounded-full "
              />
              <span>LinkedIn</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/AliAkramkk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:opacity-80 hover:transition-transform duration-500 ease-in-out transform hover:scale-110"
            >
              <img
                src={git}
                alt="GitHub"
                className="w-8 h-8 rounded-full text-white border-2 border-gray-400"
              />
              <span>GitHub</span>
            </a>

            {/* Email */}
            <a
              href="mailto:akramkorakkottil@gmail.com"
              className="flex items-center space-x-2 hover:opacity-80 hover:transition-transform duration-500 ease-in-out transform hover:scale-110"
            >
              <span>📧</span>
              <span>akramkorakkottil@gmail.com</span>
            </a>

            {/* Mobile */}
            <a
              href="tel:9946921752"
              className="flex items-center space-x-2 hover:opacity-80 hover:transition-transform duration-500 ease-in-out transform hover:scale-110 mt-2"
            >
              <span>📞</span>
              <span>+91 9946 921 752</span>
              <span> </span>
              <span>📞</span>
              <span>+971 562613106</span>
            </a>

            {/* Resume Download */}
            <a
              href={resumePDF} // Resume file path
              download="Ali_Akram_Resume.pdf"
              className=" items-center justify-start space-x-2 hover:opacity-80  ease-in-out transform hover:scale-110  px-3 py-2 mt-2 rounded-lg text-white font-semibold"
            >
              <span>📄</span>
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        {/* Close Button */}
        <div className="mt-6 text-center">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
