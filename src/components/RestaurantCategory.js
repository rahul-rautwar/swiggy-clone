import React from "react";

const RestaurantCategory = ({ data }) => {
  console.log(data);
  return (
    <div>
      {/* accordion header */}
      <div className="w-6/12 mx-auto my-4 bg-grey-50  shadow-lg p-4 flex justify-between">
        <span className="font-bold">
          {data?.title} ({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {/* accordion body */}
    </div>
  );
};

export default RestaurantCategory;
