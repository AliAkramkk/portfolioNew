import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ali from "../assets/Images/ali.jpg";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 3000, // Set sliding interval to 3 seconds
  };

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      text: "This is an amazing service! Highly recommended.",
      role: "Software Engineer",
      img: ali,
    },
    {
      id: 2,
      name: "Jane Smith",
      text: "I am extremely satisfied with the quality and support provided.",
      role: "Product Manager",
      img: ali,
    },
    {
      id: 3,
      name: "Michael Brown",
      text: "Professional and reliable, couldn’t ask for more!",
      role: "Business Owner",
      img: ali,
    },
  ];

  return (
    <div className="text-black py-10 bg-cover bg-black">
      <div className="max-w-2xl mx-auto p-3 rounded-lg shadow-md bg-gray-200">
        <h2 className="text-2xl font-bold text-center mb-6">Testimonials</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="text-center p-4">
              <div className="flex justify-center items-center mb-4">
                <img
                  src={testimonial.img}
                  alt="user"
                  className="w-16 h-16 rounded-full"
                />
                <div className="ml-4 text-left">
                  <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-900 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-lg italic">"{testimonial.text}"</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSlider;
