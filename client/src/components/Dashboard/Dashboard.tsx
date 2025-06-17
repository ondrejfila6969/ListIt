import React, { useState, useEffect } from "react";
import { Search, Bell, Calendar, Moon, Sun } from "lucide-react";

import "../../scss/Dashboard/Dashboard.scss";

export const Dashboard: React.FC = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.body.classList.toggle("dark-mode", darkMode);
    }, [darkMode]);

    const toggleTheme = () => {
        setDarkMode((prev) => !prev);
    };

    return (
        <nav className="dashboard-nav">
            <h1 className="dashboard-title">
                <span className="dashboard-title-color">List</span>It
            </h1>
            <div className="dashboard-search">
                <div className="search-group">
                    <input
                        type="text"
                        placeholder="Search tasks..."
                        className="dashboard-search-input"
                    />
                    <button className="dashboard-search-button">
                        <Search className="search-icon" size={18} />
                    </button>
                </div>
                <button className="icon-button">
                    <Bell size={22} color="blue" />
                </button>
                <button className="icon-button">
                    <Calendar size={22} color="blue" />
                </button>
                <button className="icon-button" onClick={toggleTheme}>
                    {darkMode ? (
                        <Sun size={22} color="blue" />
                    ) : (
                        <Moon size={22} color="blue" />
                    )}
                </button>
            </div>
        </nav>
    );
};