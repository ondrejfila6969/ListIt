import type { TaskStructure } from "../../../models/task/interfaces/task";

export interface ToDoProps {
  name: string;
  showAddButton?: boolean;
  showSortButton?: boolean;
  onTaskSelect: (task: TaskStructure) => void;
}