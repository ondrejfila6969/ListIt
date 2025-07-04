import React from "react";
import { CirclePlus } from "lucide-react";
import { TaskCreateForm } from "../CRUD/TaskCreateForm/TaskCreateForm";
import type { AddTaskButtonProps } from "./AddTaskButtonProps/AddTaskButtonProps";

export const AddTaskButton: React.FC<AddTaskButtonProps> = ({
  showForm,
  onOpen,
  onClose,
  onCreated,
}) => {
  return (
    <>
      <button className="todo-add-button" onClick={onOpen}>
        <CirclePlus />
        <span>Add task</span>
      </button>

      {showForm && <TaskCreateForm onClose={onClose} onCreated={onCreated} />}
    </>
  );
};
