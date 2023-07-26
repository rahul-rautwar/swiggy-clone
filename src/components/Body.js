import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { RESTAUARNTS_URL } from "../utils/constant";
import { Link } from "react-router-dom";
// import  from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestuarants, setFilteredRestuarants] = useState([]);
  const [searchText, setSearchText] = useState("");
  // [] - will be callend after render
  // anyVarName - then called after anyVarName changed
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAUARNTS_URL);
    const json = await data.json();
    setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestuarants(json?.data?.cards[2]?.data?.data?.cards);
  };

  //conditional rendering
  return !listOfRestaurants.length ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-btn"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button
            type="button"
            className=""
            onClick={() => {
              const filteredRestuarantsList = listOfRestaurants.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestuarants(filteredRestuarantsList);
            }}
          >
            Search
          </button>
        </div>
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
        {filteredRestuarants.map((res) => {
          return (
            <Link key={res.data.id} to={"/restaurants/" + res.data.id}>
              <RestaurantCard resData={res}></RestaurantCard>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
