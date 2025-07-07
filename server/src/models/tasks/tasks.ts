import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  user: { type: String, ref: "User", required: true },
  category: {
    type: String,
    enum: [
      "work",
      "personal",
      "shopping",
      "health",
      "finance",
      "school",
      "home",
      "travel",
      "other",
    ],
    required: true,
  },
  name: { type: String, required: true, maxlength: 30 },
  description: { type: String, required: false },
  completed: { type: Boolean, default: false },
  deadlineDate: { type: Date },
  priority: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "medium",
  },
  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date, default: Date.now },
});

taskSchema.pre("save", function (this: any, next: () => void) {
  this.modifiedAt = new Date();
  next();
});

taskSchema.pre("findOneAndUpdate", function (this: any, next: () => void) {
  this.set({ modifiedAt: new Date() });
  next();
});

const Task = mongoose.model("Task", taskSchema);

export default Task;
