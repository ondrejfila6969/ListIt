import React from "react";
import { ToDo } from "../../../components/ToDo/ToDo";
import { TasksStatus } from "../../../components/TasksStatus/TasksStatus";
import { CompletedTasks } from "../../../components/CompletedTasks/CompletedTasks";

export const HomePageContent: React.FC = () => {
  return (
    <>
      <ToDo name="To-Do" showAddButton showSortButton={false}/>
      <div className="home-page-tasks-container">
        <TasksStatus />
        <CompletedTasks />
      </div>
    </>
  );
};
