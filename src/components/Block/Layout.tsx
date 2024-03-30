// import React from 'react'
import Header from "../Static/Header";
import { Outlet } from "react-router-dom";
import SideBar from "../Static/SideBar";
import { useSelector } from "react-redux";

const Layout = () => {
  const menuState = useSelector((state: any) => state.toggleMenu);
  return (
    <div>
      <Header />
      <div className="flex">
        <div className="md:flex">
          <SideBar />
        </div>
        <div className="flex justify-end w-[100%]">
          <div className="w-full transition-all duration-300 md:w-[calc(100%-220px)] relative flex m-2 p-2 rounded-md">
            {menuState && (
                <div></div>
            )}
           <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
