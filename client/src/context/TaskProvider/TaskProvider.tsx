import React, {useState, useEffect, createContext, type ReactNode, useContext} from "react";
import type { Task, ResponseData } from "../../models/task/interfaces/task";
import { getAllTasks } from "../../models/task/task";

interface TaskContextType {
  tasks: Task[] | null;
  isLoading: boolean;
  reloadTasks: () => Promise<void>;
}

const TaskContext = createContext<TaskContextType | null>(null);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const reloadTasks = async () => {
    setIsLoading(true);
    const res: ResponseData<Task[]> = await getAllTasks();
    if (res.status === 200) {
      setTasks(res.payload);
    } else {
      setTasks(null);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    reloadTasks();
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, isLoading, reloadTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = (): TaskContextType => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTask must be used within a TaskProvider!");
  }
  return context;
};