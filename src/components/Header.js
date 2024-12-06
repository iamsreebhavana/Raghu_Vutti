import React from "react";
import logo from "../assets/images/logo.png";
import "../assets/styles/header.scss";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="logoSection">
        <img src={logo} alt="no-img" />
      </div>
      {/* <div className="navBar">
        <p>Mentorship</p>
        <button>Say Hello</button>
      </div> */}
    </div>
  );
};

export default Header;
