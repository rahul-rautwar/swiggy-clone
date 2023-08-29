import React from "react";
import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    // updating parents state variables i.e lifting the sate up concept
    setShowIndex();
  };
  return (
    <div>
      {/* accordion header */}
      <div className="w-6/12 mx-auto my-4 bg-grey-50  shadow-lg p-4 ">
        <div
          className="flex justify-between  cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold ">
            {data?.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {/* accordion body */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
