import React from "react";
import "../../scss/ToDo/ToDo.scss";
import { NotebookPen} from "lucide-react";
import type { ToDoProps } from "./ToDoProps/ToDoProps";
import { AddTaskButton } from "../AddTaskButton/AddTaskButton";

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
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
            voluptate debitis nam necessitatibus quae aliquid a autem
            consectetur? Natus illum modi et sed. Laborum vero totam at atque
            eius nemo.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
            voluptate debitis nam necessitatibus quae aliquid a autem
            consectetur? Natus illum modi et sed. Laborum vero totam at atque
            eius nemo.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
            voluptate debitis nam necessitatibus quae aliquid a autem
            consectetur? Natus illum modi et sed. Laborum vero totam at atque
            eius nemo.
          </p>
        </div>
      </div>
    </>
  );
};
