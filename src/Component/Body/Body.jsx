import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "../MainContainer/MainContainer";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="max-w-screen flex">
      <div className="grid grid-cols-[auto,1fr] flex-grow-1">
        <Sidebar className="sticky top-0 " />
        <div className="overflow-auto no-scrollbar px-2 pb-4">
          <Outlet />
        </div>
      </div>
      {/* <div className="overflow-auto no-scrollbar px-8 pb-4 ">
        <MainContainer />
        <WatchPage/>
      </div> */}
    </div>
  );
};

export default Body;
