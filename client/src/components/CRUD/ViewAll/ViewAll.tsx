import React from "react";
import "../../../scss/CRUD/ViewAll/ViewAll.scss";
import { Trash2, Check } from "lucide-react";

// PAGES/COMPONENTS
import { Loading } from "../../../pages/Loading/Loading";
import { Error } from "../../../pages/Error/Error";

// MODELS
import { completeTask } from "../../../models/task/task";
import { deleteTask } from "../../../models/task/task";

// TYPES
import type { ViewAllProps } from "./ViewAllProps/ViewAllProps";
import type { TaskStructure } from "../../../models/task/interfaces/task";

import { useTask } from "../../../context/TaskProvider/TaskProvider";

export const ViewAll: React.FC<ViewAllProps> = ({ onTaskSelect }) => {
  const { tasks, isLoading, reloadTasks } = useTask();

  if (isLoading) return <Loading/>
  if (!tasks) return <Error/>

  const handleDeleteButton = async (taskId: string) => {
    const res = await deleteTask(taskId);
    if (res.status === 200) reloadTasks();
    else console.error("FAILED TO DELETE TASK!");
  };

  const handleCompleteButton = async (taskId: string, task: TaskStructure) => {
    const updatedTask = { ...task, completed: true };
    const res = await completeTask(taskId, updatedTask);
    if (res.status === 200) reloadTasks();
    else console.error("FAILED TO COMPLETE TASK!");
  };

  const categoryMap: Record<string, string> = {
    work: "💼 Work",
    personal: "🏠 Personal",
    shopping: "🛒 Shopping",
    health: "💪 Health",
    finance: "💰 Finance",
    school: "📚 School",
    home: "🧹 Home",
    travel: "✈️ Travel",
    other: "📌 Other",
  };

  return (
    <div className="viewall-task-list">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <div
            key={task._id}
            className={`viewall-task-card ${task.completed ? "completed" : "incomplete"}`}
            onClick={() => onTaskSelect(task)}
          >
            <div className="viewall-task-header">
              <h2>{task.name}</h2>
              <div className="viewall-task-tags">
                <span className={`viewall-task-category ${task.category}`}>
                  {categoryMap[task.category] || task.category}
                </span>
                <span className={`viewall-priority ${task.priority}`}>
                  {task.priority}
                </span>
              </div>
            </div>
            <p className="viewall-task-desc">{task.description || "No description."}</p>
            <div className="viewall-footer">
              <p className="viewall-task-date">Due: {task.deadlineDate}</p>
              <div className="viewall-task-actions" onClick={(e) => e.stopPropagation()}>
                {!task.completed && (
                  <button
                    className="viewall-complete-btn"
                    onClick={() => handleCompleteButton(task._id, task)}
                  >
                    <Check />
                  </button>
                )}
                <button
                  className="viewall-delete-btn"
                  onClick={() => handleDeleteButton(task._id)}
                >
                  <Trash2 />
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No tasks found.</p>
      )}
    </div>
  );
};