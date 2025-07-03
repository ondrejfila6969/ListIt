import React, { type JSX } from "react";
import { Loading } from "../../../pages/Loading/Loading";
import { Error } from "../../../pages/Error/Error";
import "../../../scss/CRUD/ViewAll/ViewAll.scss";
import { Trash2 } from "lucide-react";
import { TaskDeleteForm } from "../TaskDeleteForm/TaskDeleteForm";

import type { ViewAllProps } from "./ViewAllProps/ViewAllProps";

export const ViewAll: React.FC<ViewAllProps> = ({ tasks, isLoaded}) => {
  const showDeleteForm = (): JSX.Element => {
    return <TaskDeleteForm />;
  };

  if (isLoaded === null) return <Error />;
  if (!isLoaded) return <Loading />;

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
                onClick={showDeleteForm}
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