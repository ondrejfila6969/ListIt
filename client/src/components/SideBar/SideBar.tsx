import React from "react";
import "../../scss/SideBar/SideBar.scss";

/* COMPONENTS*/
import { SideBarCategory } from "./SideBarCategory/SideBarCategory";
import { UserCircle, LogOut, Settings, Info, LayoutDashboard, ClipboardCheck, Logs } from "lucide-react";

export const SideBar: React.FC = () => {
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar">
        <div className="sidebar-user-icon">
          <UserCircle size={80} color="white" />
        </div>
        <div className="sidebar-user-info">
          <h1>Ondra</h1>
          <h2>ondra@email.cz</h2>
        </div>
        <div className="sidebar-categories">
          <SideBarCategory name="Dashboard" icon={LayoutDashboard} color="white" path="/"/>
          <SideBarCategory name="My Task" icon={ClipboardCheck} color="white" path="/tasks"/>
          <SideBarCategory name="Task Categories" icon={Logs} color="white" path="/task-categories"/>
          <SideBarCategory name="Settings" icon={Settings} color="white" path="/settings"/>
          <SideBarCategory name="Help" icon={Info} color="white" path="/help"/>
        </div>

        <div className="sidebar-logout">
          <SideBarCategory name="Logout" icon={LogOut} color="white" path="/login"/>
        </div>
      </div>
    </div>
  );
};
