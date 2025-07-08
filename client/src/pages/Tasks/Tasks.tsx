import React, {useState} from "react";
import type { TaskStructure } from "../../models/task/interfaces/task";
import { ToDo } from "../../components/ToDo/ToDo";
import { TaskDetails } from "../../components/TaskDetails/TaskDetails";

export const Tasks: React.FC = () => {
  const [selectedTask, setSelectedTask] = useState<TaskStructure | null>(null);

  return (
    <div className="tasks-page">
      <div className="todo-wrapper">
        <ToDo name="My Tasks" showSortButton onTaskSelect={setSelectedTask} />
      </div>
      <div className="task-details-wrapper">
        {selectedTask ? (
          <TaskDetails selectedTask={selectedTask} />
        ) : (
          <p className="no-selection">Select a task to see details</p>
        )}
      </div>
    </div>
  );
};