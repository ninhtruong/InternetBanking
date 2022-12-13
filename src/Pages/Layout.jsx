import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Component/Header/Header";
import Sidebar from "../Component/SideBar/Sidebar";

export default function Layout() {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}
