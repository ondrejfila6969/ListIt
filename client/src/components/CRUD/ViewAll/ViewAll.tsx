import React, { useEffect, useState } from "react";
import type { ResponseData, Task } from "../../../models/task/interfaces/task";
import { getAllTasks } from "../../../models/task/task";
import { Loading } from "../../../pages/Loading/Loading";
import { Error } from "../../../pages/Error/Error";
import "../../../scss/CRUD/ViewAll/ViewAll.scss";
import { Trash2 } from "lucide-react";

export const ViewAll: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>();
  const [isLoaded, setLoaded] = useState<boolean | null>(false);

  const loadData = async () => {
    const res: ResponseData<Task[]> = await getAllTasks();
    if (res.status === 500 || res.status === 404) return setLoaded(null);
    if (res.status === 200) {
      setTasks(res.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  if (isLoaded === null) return <Error />;
  if (!isLoaded) return <Loading />;

  return (
    <div className="viewall-task-list">
      {tasks!.length > 0 ? (
        tasks!.map((task) => (
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
            >
              <Trash2 />
            </button>
          </div>
        ))
      ) : (
        <p>No tasks found.</p>
      )}
    </div>
  );
};
