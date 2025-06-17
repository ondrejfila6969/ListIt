import React from "react";
import "../../scss/SideBar/SideBar.scss";

/* COMPONENTS*/
import { SideBarCategory } from "./SideBarCategory/SideBarCategory";
import { Bell, UserCircle } from "lucide-react";

export const SideBar: React.FC = () => {
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar">
        <div className="sidebar-user-icon">
          <UserCircle size={80} color="white"/>
        </div>
        <div className="sidebar-user-info">
          <h1>Ondra</h1>
          <h2>ondra@email.cz</h2>
        </div> 
        <div className="sidebar-categories">
          <SideBarCategory name="Tasks" icon={Bell} color="white"/>
          <SideBarCategory name="Tasks" icon={Bell} color="white"/>
          <SideBarCategory name="Tasks" icon={Bell} color="white"/>
          <SideBarCategory name="Tasks" icon={Bell} color="white"/>
          <SideBarCategory name="Tasks" icon={Bell} color="white"/>
        </div> 
        <button className="sidebar-icon-button" aria-label="Add new task">
          +
        </button>
      </div>
    </div>
  );
};