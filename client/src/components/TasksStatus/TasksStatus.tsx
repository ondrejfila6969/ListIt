import React from "react";
import "../../scss/TasksStatus/TasksStatus.scss";
import { ChartNoAxesCombined } from "lucide-react";
import { ProgressDonutChart } from "../ProgressDonutChart/ProgressDonutChart";

export const TasksStatus: React.FC = () => {
  return (
    <div className="tasks-status-wrapper">
      <div className="tasks-status-title">
        <ChartNoAxesCombined />
        <h1>Tasks Status</h1>
      </div>
      <div className="tasks-status-container no-paragraph">
        <div className="tasks-status-chart expanded">
          <ProgressDonutChart />
        </div>
      </div>
    </div>
  );
};