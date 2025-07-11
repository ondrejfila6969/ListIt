import React from "react";
import "../../scss/TaskCategories/TaskCategories.scss";

const categoryMap: Record<string, string> = {
  work: "💼 Work",
  personal: "🏠 Personal",
  shopping: "🛒 Shopping",
  health: "💪 Health",
  finance: "💰 Finance",
  school: "📚 School",
  home: "🧹 Home",
  travel: "✈️ Travel",
  other: "📌 Other",
};

export const TaskCategories: React.FC = () => {
  return (
    <div className="category-canvas">
      <h2 className="category-title">Available Task Categories</h2>
      <div className="category-grid">
        {Object.entries(categoryMap).map(([key, label]) => (
          <div key={key} className={`category-card ${key}`}>
            {label}
          </div>
        ))}
      </div>
    </div>
  );
};