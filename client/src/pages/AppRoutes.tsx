import type { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* PAGES */
import { Home } from "./Home/Home";
import { Login } from "./Login/Login";
import { Registration } from "./Registration/Registration";

/* COMPONENTS */
import { PrivateRoute } from "../components/PrivateRoute/PrivateRoute";
import { HomePageContent } from "./Home/HomePageContent/HomePageContent";
import { ToDo } from "../components/ToDo/ToDo";
import { TaskDetails } from "../components/TaskDetails/TaskDetails";

export const AppRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />}>
            <Route index element={<HomePageContent/>}/>
            <Route path="tasks" element={<><ToDo name="My Tasks"/><TaskDetails/></>}/>
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
};
