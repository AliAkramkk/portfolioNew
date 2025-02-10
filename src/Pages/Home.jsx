import HeroBackground from "../components/HeroBackground"
import dp from '../assets/Images/ali1.png'
import ServicesSection from "../components/ServicesSection";
const Home = () => {
  return (
    <>
    <div className="relative bg-gradient-to-r from-gray-900 to-slate-800 text-white min-h-screen flex items-center">
    <div className="container mx-auto px-8 lg:flex lg:items-center lg:justify-between">
      {/* Text Section */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-4xl md:text-6xl font-mono leading-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
          Frontend <br /> <span>Developer</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          I am Ali Akram Khan – a web developer with a passion for creating
          beautiful and responsive websites.
        </p>
        <div className="relative inline-block mt-6">
  {/* <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500 to-blue-500 -z-10"></div> */}
  <button className="px-6 py-3 text-white border-2  border-gradient border-[#f09cf0] bg-gradient rounded-2xl shadow-md hover:bg-transparent transition-all hover:border-[#581258]">

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
      {/* Projects Section */}
      {/* <section className="py-16 px-8 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 max-w-6xl mx-auto">
          <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            <img
              src={"https://via.placeholder.com/300x200"}
              alt="Project 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Project 1</h3>
              <p className="text-gray-600 mt-2">
                A brief description of this project and its features.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Project 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Project 2</h3>
              <p className="text-gray-600 mt-2">
                A brief description of this project and its features.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Project 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Project 3</h3>
              <p className="text-gray-600 mt-2">
                A brief description of this project and its features.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <ServicesSection />

      {/* Contact Section */}
      <section className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-semibold text-center">Contact Me</h2>
        <form className="mt-8 max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
              placeholder="Your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
              placeholder="Your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </section>

      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2025 Ali Akram Khan. All rights reserved.</p>
      </footer>
      </>
  );
}

export default Home