import { Navigate, Outlet } from "react-router-dom";
import type React from "react";

export const PrivateRoute: React.FC = () => {
    const token = localStorage.getItem("token");
    return token ? <Outlet/> : <Navigate to="/login" replace/>;
}