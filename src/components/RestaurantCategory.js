import React from "react";
import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowItems(!showItems);
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
