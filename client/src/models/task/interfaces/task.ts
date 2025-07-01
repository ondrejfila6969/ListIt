export interface TaskFormData {
  name: string;
  description?: string;
  deadlineDate: string;
  priority: "low" | "medium" | "high";
}

export interface Task extends TaskFormData {
  _id: string;
  completed: boolean;
  createdAt: string;
  modifiedAt: string;
}

export interface ResponseData<T> {
  status: number;
  message: string;
  payload: T;
}