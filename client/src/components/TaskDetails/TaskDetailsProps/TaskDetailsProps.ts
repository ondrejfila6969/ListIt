import type { Task } from "../../../models/task/interfaces/task";

export type TaskDetailsProps = {
  selectedTask: Task | null;
  onClose?: () => void;
}

export type CategoryType = "work" | "personal" | "shopping" | "learning" | "health" | "finance" | "other";
export type PriorityType = "low" | "medium" | "high";