import React from "react";
import "../../scss/CompletedTasks/CompletedTasks.scss";
import { ClipboardCheck } from "lucide-react";

export const CompletedTasks: React.FC = () => {
  return (
    <>
      <div className="completed-tasks-wrapper">
        <div className="completed-tasks-title">
          <ClipboardCheck/>
          <h1>Completed Tasks</h1>
        </div>
        <div className="completed-tasks-container">
                  <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati,
          quidem illo? Nulla animi vitae ab explicabo quidem voluptate doloribus
          aspernatur porro itaque eveniet? Tempore autem possimus odio
          aspernatur, quia accusantium?
        </p>
        </div>
      </div>
    </>
  );
};
