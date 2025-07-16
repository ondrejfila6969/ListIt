import React, { useState } from "react";

import "../../scss/ToDo/ToDo.scss";
import { NotebookPen } from "lucide-react";
import type { ToDoProps } from "./ToDoProps/ToDoProps";
import { ViewAll } from "../CRUD/ViewAll/ViewAll";
import { AddTaskButton } from "../AddTaskButton/AddTaskButton";
import { SortTasksPriority } from "../SortTasksPriority/SortTasksPriority";
import { useTask } from "../../context/TaskProvider/TaskProvider";

export const ToDo: React.FC<ToDoProps> = ({
  name,
  showAddButton = false,
  showSortButton = false,
  onTaskSelect,
}) => {
  const { tasks, reloadTasks } = useTask();
  const [showCreateForm, setShowCreateForm] = useState(false);

  const openCreateForm = () => setShowCreateForm(true);
  const closeCreateForm = () => setShowCreateForm(false);

  const onTaskCreated = () => {
    reloadTasks();
    closeCreateForm();
  };

  return (
    <div className="todo-wrapper">
      <div className="todo-header">
        <div className="todo-title">
          <NotebookPen />
          <h1>{name}</h1>
          {showAddButton && (
            <AddTaskButton
              showForm={showCreateForm}
              onOpen={openCreateForm}
              onClose={closeCreateForm}
              onCreated={onTaskCreated}
            />
          )}
          {showSortButton && tasks && (
            <SortTasksPriority tasks={tasks} setTasks={() => {}} />
          )}
        </div>
      </div>
      <div className="todo-container">
        <ViewAll onTaskSelect={onTaskSelect} />
      </div>
    </div>
  );
};