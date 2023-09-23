import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  {
    /* reading the context value in functional component */
  }
  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the store usinng a selector hook
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-blue-100 shadow-lg ">
      <div className="logo-container">
        <Logo />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <Link to="/">
            <li className="px-4">Home </li>
          </Link>

          <Link to="/about">
            <li className="px-4">About Us </li>
          </Link>

          <Link to="/contact">
            <li className="px-4">Contact Us </li>
          </Link>

          <Link to="/cart">
            <li className="px-4">Cart ({cartItems.length}) </li>
          </Link>
          <li className="pl-4">{onlineStatus ? "🟢" : "🔴"}</li>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
