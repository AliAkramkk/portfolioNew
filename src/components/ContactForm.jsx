import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Particles from './Particles';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('All fields are required.');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    emailjs
      .send('service_96qkcmf', 'template_fabr3fp', formData, 'O4vRHf_k3j1bHI1o1')
      .then(
        () => {
          setIsLoading(false);
          toast.success('Thank you for your message!');
          setFormData({ name: '', email: '', message: '' });
        },
        () => {
          setIsLoading(false);
          toast.error('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <div className="relative bg-black text-white min-h-screen flex items-center justify-center px-4 py-16">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={['#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.2}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          particleHoverFactor={2}
          sizeRandomness={2}
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 grid md:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* Left Section: Info */}
        <div className="flex flex-col justify-center p-6">
          <h1 className="text-4xl font-bold leading-tight mb-4">
            Let’s make something <br />
            amazing <span className="text-orange-400">together</span>.
          </h1>
          <p className="text-lg mb-6">Start by <span className="text-orange-500 font-semibold px-2">saying hi</span></p>
          <div className="space-y-2 text-sm text-gray-400">
            <p><strong>Information</strong></p>
            <p>📍 Dubai, UAE</p>
            <p>📧 akramkorakkottil@gmail.com</p>
            <p>📞 +971 562 613 106</p>
            <p>📞 +91 9946 921 752</p>
          </div>
        </div>

        {/* Right Section: Form */}
        <form onSubmit={handleSubmit} className="bg-gray-900 rounded-lg p-6 space-y-4 shadow-lg">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-500 hover:bg-orange-600 transition-colors text-white py-3 px-6 rounded-md font-semibold"
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      <ToastContainer position="top-right" autoClose={2000} hideProgressBar newestOnTop closeOnClick pauseOnHover />
    </div>
  );
};

export default ContactForm;
