import type { Task } from "../../../models/task/interfaces/task"

export type SortTasksPriorityProps = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[] | undefined>>;
};