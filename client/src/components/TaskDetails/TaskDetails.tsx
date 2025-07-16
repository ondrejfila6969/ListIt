import React, { useState, useEffect } from "react";
import { BookUser } from "lucide-react";
import "../../scss/TaskDetails/TaskDetails.scss";
import type { TaskDetailsProps, CategoryType, PriorityType } from "./TaskDetailsProps/TaskDetailsProps";
import { useTask } from "../../context/TaskProvider/TaskProvider";
import { updateTask } from "../../models/task/task";
import type { Task } from "../../models/task/interfaces/task";

export const TaskDetails: React.FC<TaskDetailsProps> = ({
  selectedTask,
  onClose,
}) => {
  const { reloadTasks } = useTask();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<CategoryType>("other");
  const [priority, setPriority] = useState<PriorityType>("medium");
  const [deadlineDate, setDeadlineDate] = useState("");
  const [completed, setCompleted] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (selectedTask) {
      setName(selectedTask.name);
      setDescription(selectedTask.description || "");
      setCategory(selectedTask.category || "other");
      setPriority(selectedTask.priority  || "medium");
      setDeadlineDate(selectedTask.deadlineDate || "");
      setCompleted(selectedTask.completed || false);
    }
  }, [selectedTask]);

  if (!selectedTask) {
    return (
      <div className="task-details-wrapper">
        <div className="task-details-title">
          <BookUser />
          <h1>Task details</h1>
        </div>
        <p>Click on a task to show its details...</p>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    const updatedTask: Task = {
      ...selectedTask,
      name,
      description,
      category,
      priority,
      deadlineDate,
      completed,
    };

    const res = await updateTask(selectedTask._id, updatedTask);
    if (res.status === 200) {
      await reloadTasks();
      if (onClose) onClose();
    } else {
      console.error("ERROR IN UPDATING TASK !");
    }

    setSaving(false);
  };

  return (
    <div className="task-details-wrapper">
      <div className="task-details-title">
        <BookUser />
        <h1>Task details</h1>
      </div>

      <form onSubmit={handleSubmit} className="task-details-container">
        <label>
          Name:
          <input
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            disabled={saving}
          />
        </label>

        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            disabled={saving}
          />
        </label>

        <label>
          Category:
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as CategoryType)}
            disabled={saving}
            className={`viewall-task-category ${category}`}
          >
            <option value="work">💼 Work</option>
            <option value="personal">🏠 Personal</option>
            <option value="shopping">🛒 Shopping</option>
            <option value="health">💪 Health</option>
            <option value="finance">💰 Finance</option>
            <option value="school">📚 School</option>
            <option value="home">🧹 Home</option>
            <option value="travel">✈️ Travel</option>
            <option value="other">📌 Other</option>
          </select>
        </label>

        <label>
          Priority:
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value as PriorityType)}
            disabled={saving}
            className={`viewall-priority ${priority}`}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>

        <label>
          Deadline:
          <input
            type="date"
            value={deadlineDate}
            onChange={(e) => setDeadlineDate(e.target.value)}
            disabled={saving}
          />
        </label>

        <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          Completed:
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
            disabled={saving}
          />
        </label>

        <button type="submit" disabled={saving} style={{ marginTop: "1rem" }}>
          {saving ? "Saving..." : "Save changes"}
        </button>
      </form>
    </div>
  );
};