import React from "react";
import "../../scss/ToDo/ToDo.scss";
import { NotebookPen } from "lucide-react";

export const ToDo: React.FC = () => {
  return (
    <>
      <div className="todo-wrapper">
        <div className="todo-title">
          <NotebookPen />
          <h1>To-Do</h1>
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
