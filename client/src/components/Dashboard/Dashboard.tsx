import React, { useState, useEffect } from "react";
import { Bell, Calendar, Moon, Sun } from "lucide-react";

import "../../scss/Dashboard/Dashboard.scss";

export const Dashboard: React.FC = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.body.classList.toggle("dark-mode", darkMode);
    }, [darkMode])

    const toggleTheme = () => {
        setDarkMode(prev => !prev);
    }

    return (
        <>
            <nav className="dashboard-nav">
                <h1 className="dashboard-title"><span className="dashboard-title-color">List</span>It</h1>
                <div className="dashboard-search">
                    <input type="text" placeholder="Search tasks..." className="dashboard-search-input" />
                    <button className="icon-button">
                        <Bell size={20} />
                    </button>
                    <button className="icon-button">
                        <Calendar size={20} />
                    </button>
                    <button className="icon-button" onClick={toggleTheme}>
                        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>
            </nav>
        </>
    )
}