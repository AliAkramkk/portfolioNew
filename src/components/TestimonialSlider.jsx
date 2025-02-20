import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ali from "../assets/Images/ikka.jpg";
import ali2 from "../assets/Images/test2.jpg";
import ali3 from "../assets/Images/test3.jpg";

const TestimonialSlider = () => {
  const settings = {
    dots: false,
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
      name: "Akmel Ali",
      text: "I am happy with his services, and he delivered them on time",
      role: "Buisness Growth Manager",
      img: ali,
    },
    {
      id: 2,
      name: "Jane Smith",
      text: "I am extremely satisfied with the quality and support provided.",
      role: "Product Manager",
      img: ali2,
    },
    {
      id: 3,
      name: "Michael Brown",
      text: "Professional and reliable, couldn’t ask for more!",
      role: "Business Owner",
      img: ali3,
    },
  ];

  return (
    <div className="text-white py-10 bg-cover bg-black border-3">
      <div className="max-w-lg m-6 md:max-w-2xl mx-2 md:mx-auto p-3  hover:shadow-slate-100 shadow-md border-2   shadow-slate-50  bg-black  ">
        
        <h2 className="text-2xl font-bold text-center mb-6">Testimonials</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="text-center p-4">
              <div className="flex justify-center items-center mb-4">
                <img
                  src={testimonial.img}
                  alt="user"
                  className="w-24 h-24 rounded-full"
                />
                <div className="ml-4 text-left">
                  <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-100 text-sm">{testimonial.role}</p>
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
