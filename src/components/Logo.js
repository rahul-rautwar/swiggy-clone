import React from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <div className="logo-wrap">
      <Link to="/">
        <img alt="logo" className="w-[15rem]" src={LOGO_URL} />
      </Link>
    </div>
  );
};

export default Logo;
