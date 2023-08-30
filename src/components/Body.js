import React, { useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { RESTAUARNTS_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
// import  from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestuarants, setFilteredRestuarants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const { loggedInUser, setUserName } = useContext(UserContext);
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
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button
            type="button"
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
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
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
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
        {/* setting the context value using state update method setUserName*/}
        <div className="m-4 p-4 flex items-center">
          Set User:{" "}
          <input
            type="text"
            className="m-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestuarants.map((res) => {
          return (
            <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
              {res?.info?.promoted ? (
                <RestaurantCardPromoted resData={res?.info} />
              ) : (
                <RestaurantCard resData={res?.info}></RestaurantCard>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
