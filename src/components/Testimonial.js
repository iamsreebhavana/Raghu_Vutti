import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination"; // Import pagination styles
import { Pagination } from "swiper/modules"; // Import Pagination module
import { testimonials } from "../utils/testimonial_mock";
import "../assets/styles/testimonial.scss";


const TestimonialCarousel = () => {
  return (
    <div className="testimonialContainer">
      <h2>Testimonials</h2>
      <p>People I've worked with have said some nice things...</p>
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="swiperSlider">
              <img src={testimonial.image} alt={testimonial.name} />
              <p>"{testimonial.feedback}"</p>
              <h4>{testimonial.name}</h4>
              <h5>{testimonial.position}</h5>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialCarousel;
