import React from "react";
import "../../scss/SideBar/SideBar.scss";

/* COMPONENTS*/
import { SideBarCategory } from "./SideBarCategory/SideBarCategory";
import {
  UserCircle,
  LogOut,
  Settings,
  Info,
  LayoutDashboard,
  ClipboardCheck,
  Logs,
  House
} from "lucide-react";
import { useAuth } from "../../context/AuthProvider/AuthProvider";

export const SideBar: React.FC = () => {
  const { user, isLoading } = useAuth();

  return (
    <div className="sidebar-wrapper">
      <div className="sidebar">
        <div className="sidebar-user">
          <div className="sidebar-user-icon">
            <UserCircle size={80} color="white" />
          </div>
          <div>
            {isLoading ? (
              <p>Loading...</p>
            ) : user ? (
              <>
                <h1 className="sidebar-user-info">
                  {user.first_name} {user.last_name}
                </h1>
                <h3>{user.email}</h3>
              </>
            ) : (
              <>
                <h1>Guest</h1>
                <h2>Not logged in</h2>
              </>
            )}
          </div>
        </div>
        <div className="sidebar-categories">
          <SideBarCategory name="Home" icon={House} color="white" path="/" />
          <SideBarCategory name="About" icon={Info} color="white" path="/about" />
          <SideBarCategory
            name="My Task"
            icon={ClipboardCheck}
            color="white"
            path="/tasks"
          />
          <SideBarCategory
            name="Task Categories"
            icon={Logs}
            color="white"
            path="/task-categories"
          />
          <SideBarCategory
            name="Settings"
            icon={Settings}
            color="white"
            path="/settings"
          />
        </div>

        <div className="sidebar-logout">
          <SideBarCategory
            name="Logout"
            icon={LogOut}
            color="white"
            path="/login"
          />
        </div>
      </div>
    </div>
  );
};
