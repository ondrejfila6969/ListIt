import type { Task } from "../../../models/task/interfaces/task";
export type ToDoProps = {
  name: string;
  showAddButton?: boolean;
  showSortButton?: boolean;
  onTaskSelect: (task: Task) => void;
};