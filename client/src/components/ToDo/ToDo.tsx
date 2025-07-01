import React from "react";
import "../../scss/ToDo/ToDo.scss";
import { NotebookPen} from "lucide-react";
import type { ToDoProps } from "./ToDoProps/ToDoProps";
import { AddTaskButton } from "../AddTaskButton/AddTaskButton";
import { ViewAll } from "../CRUD/ViewAll/ViewAll";

export const ToDo: React.FC<ToDoProps & {showAddButton ?: boolean}> = (props) => {
  return (
    <>
      <div className="todo-wrapper">
        <div className="todo-header">
          <div className="todo-title">
            <NotebookPen />
            <h1>{props.name}</h1>
            {props.showAddButton && <AddTaskButton/>}
          </div>
        </div>
        <div className="todo-container">
          <ViewAll/>
        </div>
      </div>
    </>
  );
};
