import React from "react";
import { Loading } from "../../../pages/Loading/Loading";
import { Error } from "../../../pages/Error/Error";
import "../../../scss/CRUD/ViewAll/ViewAll.scss";
import { Trash2 } from "lucide-react";

import type { ViewAllProps } from "./ViewAllProps/ViewAllProps";
import { deleteTask } from "../../../models/task/task";

export const ViewAll: React.FC<ViewAllProps> = ({ tasks, isLoaded, onTaskDeleted}) => {

  if (isLoaded === null) return <Error />;
  if (!isLoaded) return <Loading />;

  const handleDeleteButton = async (taskId: string) => {
    try {
      const res = await deleteTask(taskId);
      if (res.status === 200) {
        onTaskDeleted();
      } else {
        console.log("FAILED TO DELETE TASK !");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="viewall-task-list">
        {tasks && tasks.length > 0 ? (
          tasks.map((task) => (
            <div key={task._id} className="viewall-task-card">
              <div className="viewall-task-header">
                <h2>{task.name}</h2>
                <span className={`viewall-priority ${task.priority}`}>
                  {task.priority}
                </span>
              </div>
              <p className="viewall-task-desc">
                {task.description || "No description provided."}
              </p>
              <p className="viewall-task-date">Due: {task.deadlineDate}</p>
              <button
                className="viewall-delete-btn"
                aria-label={`Delete ${task.name}`}
                onClick={() => {handleDeleteButton(task._id)}}
              >
                <Trash2 />
              </button>
            </div>
          ))
        ) : (
          <p>No tasks found.</p>
        )}
      </div>
    </>
  );
};