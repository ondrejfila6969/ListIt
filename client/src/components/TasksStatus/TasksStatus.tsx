import React from "react";
import "../../scss/TasksStatus/TasksStatus.scss";
import { ChartNoAxesCombined } from "lucide-react";

export const TasksStatus: React.FC = () => {
  return (
    <>
      <div className="tasks-status-wrapper">
        <div className="tasks-status-title">
          <ChartNoAxesCombined />
          <h1>Tasks Status</h1>
        </div>
        <div className="tasks-status-container">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati,
            quidem illo? Nulla animi vitae ab explicabo quidem voluptate
            doloribus aspernatur porro itaque eveniet? Tempore autem possimus
            odio aspernatur, quia accusantium?
          </p>
        </div>
      </div>
    </>
  );
};
