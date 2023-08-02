import React from "react";
import { CDN_URL } from "../utils/constant";

//destructuring on the fly or props can be used
const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="restaurant logo"
        src={CDN_URL + resData?.cloudinaryImageId}
      />
      <h3>{resData?.name}</h3>
      <h4>{resData?.cuisines.join(", ")}</h4>
      <h4>{resData?.avgRating} stars</h4>
      <h4>₹{resData?.costForTwo / 100} FOR TWO</h4>
      <h4>{resData?.deliveryTime} minutes </h4>
    </div>
  );
};

export default RestaurantCard;
