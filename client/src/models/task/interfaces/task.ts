import type { CategoryType } from "../../../components/TaskDetails/TaskDetailsProps/TaskDetailsProps";
export type TaskFormData = {
  name: string;
  category: CategoryType
  description?: string;
  deadlineDate: string;
  priority: "low" | "medium" | "high";
};

export interface Task extends TaskFormData {
  _id: string;
  completed: boolean;
  createdAt: string;
  modifiedAt: string;
}

export interface TaskStructure {
  name: string;
  category:
    | "work"
    | "personal"
    | "shopping"
    | "learning"
    | "health"
    | "finance"
    | "other";
  description?: string;
  deadlineDate: string;
  priority: "low" | "medium" | "high";
  completed: boolean;
  createdAt: string;
  modifiedAt: string;
}

export interface ResponseData<T> {
  status: number;
  message: string;
  payload: T;
}
