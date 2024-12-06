import React from "react";
import "../assets/styles/companies.scss";
import logo1 from "../assets/images/logo1.svg";
import logo2 from "../assets/images/logo2.svg";
import logo3 from "../assets/images/logo3.svg";
import logo4 from "../assets/images/logo4.svg";
import logo5 from "../assets/images/logo5.png";
import logo6 from "../assets/images/logo6.svg";
import logo7 from "../assets/images/logo7.png";
import logo8 from "../assets/images/logo8.svg";


const Companies = () => {
  return (
    <div className="collaborationContainer">
      <div className="heading">
        <h2>I'm proud to have collaborated with some<br/> awesome companies:</h2>
      </div>
      <div className="companies">
        <img src={logo1} alt="no-img"/>
        <img src={logo2} alt="no-img"/>
        <img src={logo3} alt="no-img"/>
        <img src={logo4} alt="no-img"/>
        <img src={logo5} alt="no-img"/>
        <img src={logo6} alt="no-img"/>
        <img src={logo7} alt="no-img"/>
        <img src={logo8} alt="no-img"/>
      </div>
    </div>
  );
};

export default Companies;
