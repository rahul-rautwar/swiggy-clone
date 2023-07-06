import React from "react";
import RestaurantCard from "./RestaurantCard";
import { resData } from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            alert("hi");
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {resData.map((res) => {
          return (
            <RestaurantCard key={res.data.id} resData={res}></RestaurantCard>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
