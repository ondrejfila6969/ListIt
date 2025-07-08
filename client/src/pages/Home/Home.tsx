import React, {useState} from "react";
import "../../scss/Home/Home.scss";
import { Outlet } from "react-router-dom";
import type { TaskStructure } from "../../models/task/interfaces/task";
/* COMPONENTS */
import { Dashboard } from "../../components/Dashboard/Dashboard";
import { SideBar } from "../../components/SideBar/SideBar";

export const Home: React.FC = () => {
  const [selectedTask, setSelectedTask] = useState<TaskStructure | null>(null);

  return (
    <>
      <Dashboard />
      <div className="home-page-layout">
        <SideBar />
        <div className="home-page-tasks-wrapper">
          <Outlet context={{ selectedTask, setSelectedTask }} />
        </div>
      </div>
    </>
  );
};