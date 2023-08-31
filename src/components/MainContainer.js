import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import UserContext from "../utils/UserContext";

const MainContainer = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const data = {
      name: "Rahul Rautwar",
    };
    setUserName(data.name);
  }, []);
  return (
    <div>
      {/* setting the context value using UserContext.Provider*/}
      {/* we can pass user context to HEADER only also */}
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <Header />
        <Outlet />
      </UserContext.Provider>
    </div>
  );
};

export default MainContainer;
