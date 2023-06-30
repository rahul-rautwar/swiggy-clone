import React from "react";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <Logo />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
