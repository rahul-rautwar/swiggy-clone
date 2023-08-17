import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { RESTAUARNTS_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import  from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestuarants, setFilteredRestuarants] = useState([]);
  const [searchText, setSearchText] = useState("");
  // [] - will be called after render
  // anyVarName - then called after anyVarName changed
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAUARNTS_URL);
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestuarants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <h1>
        Oops... Looks like your offline!!! Please check your Internet
        connection....
      </h1>
    );
  }

  //conditional rendering
  return !listOfRestaurants?.length ? (
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
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
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
            setFilteredRestuarants(
              listOfRestaurants.filter((res) => res.info.avgRating > 4)
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
            <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
              <RestaurantCard resData={res?.info}></RestaurantCard>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
