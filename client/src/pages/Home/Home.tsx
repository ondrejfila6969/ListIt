import React from "react";
import "../../scss/Home/Home.scss";

/* COMPONENTS */
import { Dashboard } from "../../components/Dashboard/Dashboard";
import { SideBar } from "../../components/SideBar/SideBar";
import { ToDo } from "../../components/ToDo/ToDo";
import { TasksStatus } from "../../components/TasksStatus/TasksStatus";
import { CompletedTasks } from "../../components/CompletedTasks/CompletedTasks";

export const Home: React.FC = () => {
  return (
    <>
      <Dashboard />
      <div className="home-page-layout">
        <SideBar />
        <div className="home-page-tasks-wrapper">
          <ToDo />
          <div className="home-page-tasks-container">
            <TasksStatus />
            <CompletedTasks />
          </div>
        </div>
      </div>
    </>
  );
};
