import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header-container">
      <div className="logo-container">
        <Logo />
      </div>
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home </li>
          </Link>

          <Link to="/about">
            <li>About Us </li>
          </Link>

          <Link to="/contact">
            <li>Contact Us </li>
          </Link>

          <Link to="/cart">
            <li>Cart </li>
          </Link>
          <li className="online-status">{onlineStatus ? "🟢" : "🔴"}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
