import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Component/Header/Header";
import Sidebar from "../Component/SideBar/Sidebar";

export default function Layout() {
  return (
    <div style={{ backgroundColor: "rgb(246, 248, 250)" }}>
      <Header />
      <div className="flex">
        <Sidebar />
        <div style={{ flexGrow: 1, padding: "30px" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
