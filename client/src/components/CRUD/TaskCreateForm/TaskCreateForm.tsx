import React, { useState } from "react";
import "../../../scss/CRUD/TaskCreateForm/TaskCreateForm.scss";
import type { TaskCreateFormProps } from "./TaskCreateFormProps/TaskCreateFormProps";
import { useNavigate } from "react-router-dom";
import { createTask } from "../../../models/task/task";
import type { TaskFormData } from "../../../models/task/interfaces/task";

export const TaskCreateForm: React.FC<TaskCreateFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<TaskFormData>({
    name: "",
    description: "",
    deadlineDate: "",
    priority: "medium",
  });
  const [info, setInfo] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePriorityChange = (priority: "low" | "medium" | "high") => {
    setFormData((prev) => ({ ...prev, priority }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await createTask(formData);
    if (res.status === 201) {
      onClose();
      navigate("/");
    } else {
      setInfo(res.message);
    }
  };

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