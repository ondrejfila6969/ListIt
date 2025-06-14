import express, { Router } from "express";
import * as taskController from "@src/controllers/tasks/tasks";

const taskRouter: Router = express.Router();

taskRouter.get("/", taskController.getAllTasks);
taskRouter.get("/:id", taskController.getTasksById);
taskRouter.post("/", taskController.createTask);
taskRouter.put("/:id", taskController.updateTask);
taskRouter.delete("/:id", taskController.deleteTask);

export default taskRouter;
