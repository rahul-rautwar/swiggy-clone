import React from "react";
import { LOGO_URL } from "../utils/constant";

const Logo = () => {
  return (
    <div className="logo-wrap">
      <img alt="logo" className="w-[15rem]" src={LOGO_URL} />
    </div>
  );
};

export default Logo;
