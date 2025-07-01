import React from "react";
import { BookUser } from "lucide-react";
import "../../scss/TaskDetails/TaskDetails.scss";

export const TaskDetails: React.FC = () => {
  return (
    <>
      <div className="task-details-wrapper">
        <div className="task-details-title">
          <BookUser />
          <h1>Task details</h1>
        </div>
        <div className="task-details-container">

        </div>
      </div>
    </>
  );
};
