import React from "react";
import { Loading } from "../../../pages/Loading/Loading";
import { Error } from "../../../pages/Error/Error";
import "../../../scss/CRUD/ViewAll/ViewAll.scss";
import { Trash2, Check } from "lucide-react";
import { completeTask } from "../../../models/task/task";
import type { ViewAllProps } from "./ViewAllProps/ViewAllProps";
import { deleteTask } from "../../../models/task/task";
import type { Task } from "../../../models/task/interfaces/task";

export const ViewAll: React.FC<ViewAllProps> = ({
  tasks,
  isLoaded,
  onTaskDeleted,
  onTaskCompleted,
}) => {
  if (isLoaded === null) return <Error />;
  if (!isLoaded) return <Loading />;

  const handleDeleteButton = async (taskId: string) => {
    try {
      const res = await deleteTask(taskId);
      if (res.status === 200) {
        onTaskDeleted();
      } else {
        console.log("FAILED TO DELETE TASK!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCompleteButton = async (taskId: string, task: Task) => {
    try {
      const formData = {
        name: task.name,
        category: task.category,
        description: task.description,
        deadlineDate: task.deadlineDate || "",
        priority: task.priority,
        completed: true,
      };

      const res = await completeTask(taskId, formData);
      if (res.status === 200) {
        onTaskCompleted();
      } else {
        console.log("FAILED TO COMPLETE TASK!");
      }
    } catch (error) {
      console.log(error);
    }
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
      {tasks && tasks.length > 0 ? (
        tasks.map((task) => (
          <div
            key={task._id}
            className={`viewall-task-card ${task.completed ? "completed" : "incomplete"}`}
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

            <p className="viewall-task-desc">
              {task.description || "No description provided."}
            </p>

            <div className="viewall-footer">
              <p className="viewall-task-date">Due: {task.deadlineDate}</p>
              <div className="viewall-task-actions">
                {!task.completed && (
                  <button
                    className="viewall-complete-btn"
                    aria-label={`Mark ${task.name} as completed`}
                    onClick={() => handleCompleteButton(task._id, task)}
                  >
                    <Check />
                  </button>
                )}
                <button
                  className="viewall-delete-btn"
                  aria-label={`Delete ${task.name}`}
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