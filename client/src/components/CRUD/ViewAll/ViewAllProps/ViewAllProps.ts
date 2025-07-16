import type { TaskStructure } from "../../../../models/task/interfaces/task";

export interface ViewAllProps {
  onTaskSelect: (task: TaskStructure) => void;
}