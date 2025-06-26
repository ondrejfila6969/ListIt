import React from "react";
import "../../scss/Home/Home.scss";
import { Outlet } from "react-router-dom";

/* COMPONENTS */
import { Dashboard } from "../../components/Dashboard/Dashboard";
import { SideBar } from "../../components/SideBar/SideBar";

export const Home: React.FC = () => {
  return (
    <>
      <Dashboard />
      <div className="home-page-layout">
        <SideBar />
        <div className="home-page-tasks-wrapper">
          <Outlet/>
        </div>
      </div>
    </>
  );
};
