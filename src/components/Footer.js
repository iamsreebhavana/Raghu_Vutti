import React from 'react';
import logo from "../assets/images/logo.png";
import google from "../assets/images/google.png";
// import twitter from "../assets/images/twitter.png";
import linkedin from "../assets/images/linkedin.png";
import mail from "../assets/images/mail.png";
import "../assets/styles/Footer.scss";

const Footer = () => {
  return (
    <div className='footerContainer'>
      <img src={logo} alt="no-alt"/>
      <h2>Living, learning & leveling up one day at a time!</h2>
      <div className='iconsContainer'>
        <img src={google} alt="no-img"/>
        <img src={mail} alt="no-img"/>
        <img src={linkedin} alt="no-img"/>
      </div>
    </div>
  )
}

export default Footer