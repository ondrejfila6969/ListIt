import React, { useState } from "react";
import "../../../scss/CRUD/TaskCreateForm/TaskCreateForm.scss";
import { useNavigate } from "react-router-dom";
import { createTask } from "../../../models/task/task";
import type { TaskFormData } from "../../../models/task/interfaces/task";
import { useAuth } from "../../../context/AuthProvider/AuthProvider";

export const TaskCreateForm: React.FC<{
  onClose: () => void;
  onCreated: () => void;
}> = ({ onClose, onCreated }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<TaskFormData>({ // DEFAULT DATA
    name: "",
    category: "work",
    description: "",
    deadlineDate: "",
    priority: "medium",
  });

  const [info, setInfo] = useState<string | null>(null);

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCategoryChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      category: e.target.value as TaskFormData["category"],
    }));
  };

  const handlePriorityChange = (priority: "low" | "medium" | "high") => {
    setFormData((prev) => ({ ...prev, priority }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      setInfo("User is not logged in.");
      return;
    }

    const dataToSend = {
      ...formData,
      user: user._id,
    };

    try {
      const res = await createTask(dataToSend);
      if (res.status === 201) {
        onCreated();
        onClose();
        navigate("/");
      } else {
        setInfo(res.message || "Failed to create task");
      }
    } catch (error) {
      setInfo("An error occurred while creating the task.");
    }
  };

  const categories = [
    { value: "work", label: "💼 Work" },
    { value: "personal", label: "🏠 Personal" },
    { value: "shopping", label: "🛒 Shopping" },
    { value: "learning", label: "📚 Learning" },
    { value: "health", label: "💪 Health" },
    { value: "finance", label: "💰 Finance" },
    { value: "other", label: "📌 Other" },
  ];

  return (
    <div className="modal-overlay">
      <div className="task-create-form-wrapper">
        <div className="task-create-form-header">
          <span>Add Task</span>
          <button onClick={onClose}>Go Back</button>
        </div>
        <form className="task-create-form-container" onSubmit={handleSubmit}>
          <div className="task-create-form-name">
            <h1>Title</h1>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInput}
              placeholder="Enter task name"
              required
            />
          </div>

          <div className="task-create-form-date">
            <h1>Date</h1>
            <input
              type="date"
              name="deadlineDate"
              value={formData.deadlineDate}
              onChange={handleInput}
              required
            />
          </div>

          <div className="task-create-form-category">
            <h1>Category</h1>
            <select
              name="category"
              value={formData.category}
              onChange={handleCategoryChange}
              required
              className="task-create-form-category-select"
            >
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>

          <h1>Priority</h1>
          <div className="task-create-form-priority">
            <label>
              <input
                type="radio"
                name="priority"
                checked={formData.priority === "high"}
                onChange={() => handlePriorityChange("high")}
              />
              High
            </label>
            <label>
              <input
                type="radio"
                name="priority"
                checked={formData.priority === "medium"}
                onChange={() => handlePriorityChange("medium")}
              />
              Medium
            </label>
            <label>
              <input
                type="radio"
                name="priority"
                checked={formData.priority === "low"}
                onChange={() => handlePriorityChange("low")}
              />
              Low
            </label>
          </div>

          <div className="task-create-form-description">
            <h1>Task description</h1>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleInput}
              placeholder="Optional..."
            />
          </div>

          <p style={{ color: "red", textAlign: "center" }}>{info}</p>

          <div className="task-create-form-footer">
            <button className="task-create-form-submit" type="submit">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};