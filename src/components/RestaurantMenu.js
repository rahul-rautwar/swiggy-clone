import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [restInfo, setRestInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=651837&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json?.data?.cards[0]?.card?.card?.info);
    setRestInfo(json?.data?.cards[0]?.card?.card?.info);
  };

  return !restInfo ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{restInfo.name}</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
