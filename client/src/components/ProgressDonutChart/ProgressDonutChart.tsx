import React, {useState, useEffect} from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import { getAllTasks } from "../../models/task/task";
import "../../scss/ProgressDonutChart/ProgressDonutChart.scss";

export const ProgressDonutChart: React.FC = () => {
  const [completedPercent, setCompletedPercent] = useState(0);
  const [incompletePercent, setIncompletePercent] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTasks() {
      setLoading(true);
      try {
        const response = await getAllTasks();
        if (response.status === 200 && response.payload) {
          const tasks = response.payload;
          const total = tasks.length;
          if (total === 0) {
            setCompletedPercent(0);
            setIncompletePercent(0);
          } else {
            const completedCount = tasks.filter((t) => t.completed).length;
            const incompleteCount = total - completedCount;
            setCompletedPercent(Math.round((completedCount / total) * 100));
            setIncompletePercent(Math.round((incompleteCount / total) * 100));
          }
        }
      } catch (error) {
        console.error("Failed to fetch tasks", error);
        setCompletedPercent(0);
        setIncompletePercent(0);
      } finally {
        setLoading(false);
      }
    }

    fetchTasks();
  }, []);

  if (loading) return <div className="donut-loading">Loading...</div>;

  return (
    <div className="progress-donut-chart-wrapper">
      <div className="donut-chart completed">
        <CircularProgressbar
          value={completedPercent}
          styles={buildStyles({
            pathColor: "#27ae60",
            trailColor: "#e6e6e6",
            textColor: "transparent",
            strokeLinecap: "round",
          })}
        />
        <div className="donut-label">{completedPercent}%<br />Completed</div>
      </div>

      <div className="donut-chart incomplete">
        <CircularProgressbar
          value={incompletePercent}
          styles={buildStyles({
            pathColor: "#e74c3c",
            trailColor: "#e6e6e6",
            textColor: "transparent",
            strokeLinecap: "round",
          })}
        />
        <div className="donut-label">{incompletePercent}%<br />Incomplete</div>
      </div>
    </div>
  );
};