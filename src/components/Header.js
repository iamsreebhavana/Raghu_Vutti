import React from "react";
import logo from "../assets/images/logo.png";
import "../assets/styles/header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="headerContainer">
      <Link to="/">
        <div className="logoSection">
          <img src={logo} alt="no-img" />
        </div>
      </Link>
    </div>
  );
};

export default Header;
