import type { Task } from "../../../../models/task/interfaces/task";

export type ViewAllProps = {
  tasks?: Task[];
  isLoaded: boolean | null;
};