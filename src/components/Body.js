import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { RESTAUARNTS_URL } from "../utils/constant";
// import  from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  // [] - will be callend after render
  // anyVarName - then called after anyVarName changed
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAUARNTS_URL);
    const json = await data.json();
    setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  };

  //conditional rendering
  return !listOfRestaurants.length ? (
    <Shimmer />
  ) : (
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
