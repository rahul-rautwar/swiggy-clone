import { useEffect, useState } from "react";
import { GET_MENU } from "./constant";

const useRestaurantMenu = (resId) => {
  const [restInfo, setRestInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(GET_MENU + resId);
    const json = await data.json();
    setRestInfo(json.data);
  };
  return restInfo;
};

export default useRestaurantMenu;
