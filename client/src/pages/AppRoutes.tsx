import type { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* PAGES */
import { Home } from "./Home/Home";
import { Login } from "./Login/Login";
import { Registration } from "./Registration/Registration";

/* COMPONENTS */
import { PrivateRoute } from "../components/PrivateRoute/PrivateRoute";

export const AppRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
};
