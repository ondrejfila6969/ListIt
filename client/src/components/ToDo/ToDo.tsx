import React, {useState, useEffect} from "react";
import { getAllTasks } from "../../models/task/task";
import type { ResponseData, Task } from "../../models/task/interfaces/task";

import "../../scss/ToDo/ToDo.scss";
import { NotebookPen} from "lucide-react";
import type { ToDoProps } from "./ToDoProps/ToDoProps";
import { ViewAll } from "../CRUD/ViewAll/ViewAll";
import { AddTaskButton } from "../AddTaskButton/AddTaskButton";
import { SortTasksPriority } from "../SortTasksPriority/SortTasksPriority";

export const ToDo: React.FC<ToDoProps> = ({ name, showAddButton, showSortButton }) => {
  const [tasks, setTasks] = useState<Task[]>();
  const [isLoaded, setLoaded] = useState<boolean | null>(false);

  const loadData = async () => {
    const res: ResponseData<Task[]> = await getAllTasks();
    if (res.status === 500 || res.status === 404) return setLoaded(null);
    if (res.status === 200) {
      setTasks(res.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="todo-wrapper">
      <div className="todo-header">
        <div className="todo-title">
          <NotebookPen />
          <h1>{name}</h1>
          {showAddButton && <AddTaskButton />}
          {showSortButton && tasks && <SortTasksPriority tasks={tasks} setTasks={setTasks} />}
        </div>
      </div>
      <div className="todo-container">
        <ViewAll tasks={tasks} isLoaded={isLoaded}/>
      </div>
    </div>
  );
};