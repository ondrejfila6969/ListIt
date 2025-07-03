import type React from "react";

export const TaskDeleteForm: React.FC = () => {

  return (
    <>
    {/** 
     * 
     * <div className="modal-overlay">
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
    */}
    </>
  );
};
