import React from "react";
import profile from "../assets/images/profile.jpeg";
import hero_device from "../assets/images/hero_device.svg";
import "../assets/styles/hero.scss";

const Hero = () => {
  return (
    <div className="heroContainer">
      <h2>Designer, Frontend Developer & Mentor</h2>
      <p>I design and code beautifully simple things, and I love what I do.</p>
      <div className="profileSection">
        <img src={profile} alt="no-img" />
      </div>
      <div className="bannerSection">
        <img src={hero_device} alt="no-img" />
      </div>
    </div>
  );
};

export default Hero;
