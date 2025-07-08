import React from "react";
import { BookUser } from "lucide-react";
import "../../scss/TaskDetails/TaskDetails.scss";
import type { TaskDetailsProps } from "./TaskDetailsProps/TaskDetailsProps";

export const TaskDetails: React.FC<TaskDetailsProps> = ({ selectedTask }) => {
  if (!selectedTask) {
    return (
      <div className="task-details-wrapper">
        <p>No task selected.</p>
      </div>
    );
  }

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

  const categoryClass = selectedTask.category.toLowerCase();
  const priorityClass = selectedTask.priority.toLowerCase();
  const statusClass = selectedTask.completed ? "" : "incomplete";

  return (
    <div className="task-details-wrapper">
      <div className="task-details-title">
        <BookUser />
        <h1>Task details</h1>
      </div>
      <div className="task-details-container">
        <h2>{selectedTask.name}</h2>
        <p>{selectedTask.description}</p>
        <p>
          <span className={`viewall-task-category ${categoryClass}`}>
            {categoryMap[categoryClass] || categoryMap.other}
          </span>
        </p>
        <p>
          Priority:{" "}
          <span className={`viewall-priority ${priorityClass}`}>
            {selectedTask.priority}
          </span>
        </p>
        <p>
          Deadline:{" "}
          <strong>{selectedTask.deadlineDate || "No deadline"}</strong>
        </p>
        <p>
          Status:{" "}
          <strong className={statusClass}>
            {selectedTask.completed ? "Completed" : "Incomplete"}
          </strong>
        </p>
      </div>
    </div>
  );
};
