import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import type { Task } from "../models/task/interfaces/task";

/* PAGES */
import { Home } from "./Home/Home";
import { Login } from "./Login/Login";
import { Registration } from "./Registration/Registration";
/* COMPONENTS */
import { PrivateRoute } from "../components/PrivateRoute/PrivateRoute";
import { HomePageContent } from "./Home/HomePageContent/HomePageContent";
import { ToDo } from "../components/ToDo/ToDo";
import { TaskDetails } from "../components/TaskDetails/TaskDetails";

export const AppRoutes: React.FC = () => {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />}>
            <Route index element={<HomePageContent />} />
            <Route
              path="tasks"
              element={
                <>
                  <ToDo
                    name="My Tasks"
                    showSortButton
                    onTaskSelect={setSelectedTask}
                  />
                  {selectedTask ? <TaskDetails selectedTask={selectedTask} /> : <></>}
                </>
              }
            />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
};
