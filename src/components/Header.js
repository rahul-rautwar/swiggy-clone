import React from "react";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="header-container">
      <Logo />
      <div className="nav-container">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>My Order</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
