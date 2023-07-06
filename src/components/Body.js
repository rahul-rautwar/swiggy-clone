import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { resData } from "../utils/mockData";
// import  from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([
    {
      data: {
        id: "29063",
        name: "Misu",
        cloudinaryImageId: "lx0tpfgsbqygafwh30wh",
        cuisines: [
          "Asian",
          "Chinese",
          "Vietnamese",
          "Malaysian",
          "Sushi",
          "Singaporean",
          "Desserts",
        ],
        costForTwo: 130000,
        deliveryTime: 19,
        avgRating: "3.4",
      },
    },
    {
      data: {
        id: "29064",
        name: "Misu 2",
        cloudinaryImageId: "lx0tpfgsbqygafwh30wh",
        cuisines: [
          "Asian",
          "Chinese",
          "Vietnamese",
          "Malaysian",
          "Sushi",
          "Singaporean",
          "Desserts",
        ],
        costForTwo: 130000,
        deliveryTime: 19,
        avgRating: "4.4",
      },
    },
    {
      data: {
        id: "29066",
        name: "KFC 2",
        cloudinaryImageId: "lx0tpfgsbqygafwh30wh",
        cuisines: [
          "Asian",
          "Chinese",
          "Vietnamese",
          "Malaysian",
          "Sushi",
          "Singaporean",
          "Desserts",
        ],
        costForTwo: 130000,
        deliveryTime: 19,
        avgRating: "4.4",
      },
    },
  ]);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestaurants(
              listOfRestaurants.filter((res) => res.data.avgRating > 4)
            );
            console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((res) => {
          return (
            <RestaurantCard key={res.data.id} resData={res}></RestaurantCard>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
