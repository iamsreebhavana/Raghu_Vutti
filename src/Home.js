import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import RecentWorks from "./components/RecentWorks";
import Companies from "./components/Companies";
import Projects from "./components/Projects";
import Collaboration from "./components/Collaboration";
import TestimonialCarousel from "./components/Testimonial";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <RecentWorks />
      <Companies />
      <Projects />
      <Collaboration />
      <TestimonialCarousel />
      <Footer />
    </div>
  );
};

export default Home;
