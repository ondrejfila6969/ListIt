import "../../../scss/SideBar/SideBarCategory/SideBarCategory.scss";
import type React from "react";
import type { SideBarCategoryProps } from "./SideBarCategoryProps";
import { Link } from "react-router-dom";

export const SideBarCategory: React.FC<SideBarCategoryProps> = (props) => {
  const Icon = props.icon;
  return (
    <>
      <div className="sidebar-category-wrapper">
        <Link to={props.path}>
          <div className="sidebar-category">
            <button className="sidebar-icon-button">
              <Icon size={40} color={props.color} />
            </button>
            <p>{props.name}</p>
          </div>
        </Link>
      </div>
    </>
  );
};
