import React ,{useState} from 'react'
import bg2 from '../assets/Images/bg2.png'
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify'; // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css';


const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
      const [isLoading, setIsLoading] = useState(false);
      const [response, setResponse] = useState('');
      const [error, setError] = useState('');

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };


      const validateForm = () => {
        if (!formData.name || !formData.email || !formData.message) {
          toast.error('All fields are required.');
          return false;
        }
        setError('');
        return true;
      };

      const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsLoading(true);

        emailjs
        .send(
          'service_96qkcmf', // Replace with your service ID from Email.js
          'template_fabr3fp', // Replace with your template ID
          formData,
          'O4vRHf_k3j1bHI1o1' // Replace with your user ID from Email.js
        )
        .then(
          (result) => {
            setIsLoading(false);
            toast.success('Thank you for your message!');
            setFormData({ name: '', email: '', message: '' });
          },
          (error) => {
            setIsLoading(false);
            toast.error('Failed to send message. Please try again later.');
            setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          setIsLoading(false);
          setResponse('');
          setError('Failed to send message. Please try again later.');
        }
        );
    };


  return (
    <section
      className="py-16 px-8 bg-white bg-cover"
      style={{ backgroundImage: `url(${bg2})` }}
    >
      <h2 className="text-3xl font-semibold text-center text-white">Contact Me</h2>
      <form className="mt-8 max-w-lg mx-auto" onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-gray-100 font-medium" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-100 font-medium" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full mt-2 p-3 border border-gray-200 rounded-lg"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Message Field */}
        <div className="mb-4">
          <label className="block text-gray-100 font-medium" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Error message */}
        {error && <p className="text-red-500 text-center">{error}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-900"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="loader">Sending...</span> // Show a loading text
          ) : (
            'Send Message'
          )}
        </button>
      </form>

      {/* Response/Success Message */}
      {/* {response && <p className="mt-4 text-center text-white">{response}</p>} */}

      <ToastContainer
        position="top-right" // You can customize the position
        autoClose={2000} // Toast will auto-hide after 5 seconds
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
  );
};


export default ContactForm