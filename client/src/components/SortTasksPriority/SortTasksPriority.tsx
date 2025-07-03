import React, { useState } from "react";
import { Archive } from "lucide-react";
import type { SortTasksPriorityProps } from "./SortTasksPriorityProps/SortTasksPriority";


export const SortTasksPriority: React.FC<SortTasksPriorityProps> = ({ tasks, setTasks }) => {
  const [ascending, setAscending] = useState(true);

  const handleSort = () => {
    const sorted = [...tasks].sort((a, b) => {
      const priorities = ["low", "medium", "high"];
      return ascending
        ? priorities.indexOf(b.priority) - priorities.indexOf(a.priority)
        : priorities.indexOf(a.priority) - priorities.indexOf(b.priority);
    });

    setTasks(sorted);
    setAscending(!ascending);
  };

  return (
    <button className="todo-add-button" onClick={handleSort}>
      <Archive />
      <span>Sort by priority</span>
    </button>
  );
};