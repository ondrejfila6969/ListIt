import React, {useState} from "react";
import { CirclePlus } from "lucide-react";
import { TaskCreateForm } from "../CRUD/TaskCreateForm/TaskCreateForm";

export const AddTaskButton: React.FC = () => {
    const [showForm, setShowForm] = useState<boolean>(false);

    const handleButton = () => {
        setShowForm(true);
    }

    const handleClose = () => {
        setShowForm(false);
    }

    return(
        <>
            <button className="todo-add-button" onClick={handleButton}>
              <CirclePlus/>
              <span>Add task</span>
            </button>

            {showForm && <TaskCreateForm onClose={handleClose}/>}
        </>
    )
}