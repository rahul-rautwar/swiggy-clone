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
        src={CDN_URL + resData?.data?.cloudinaryImageId}
      />
      <h3>{resData?.data?.name}</h3>
      <h4>{resData?.data?.cuisines.join(", ")}</h4>
      <h4>{resData?.data?.avgRating} stars</h4>
      <h4>₹{resData?.data?.costForTwo / 100} FOR TWO</h4>
      <h4>{resData?.data?.deliveryTime} minutes </h4>
    </div>
  );
};

export default RestaurantCard;
