import React from "react";
import "../../scss/Home/Home.scss";

/* COMPONENTS */
import { Dashboard } from "../../components/Dashboard/Dashboard";
import { SideBar } from "../../components/SideBar/SideBar";

export const Home: React.FC = () => {
    return(
        <>
            <Dashboard/>
            <SideBar/>
        </>
    )
}