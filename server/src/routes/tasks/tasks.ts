import express, { Router } from "express";
import * as taskController from "@src/controllers/tasks/tasks";
import { verifyToken } from "@src/middlewares/auth";

const taskRouter: Router = express.Router();

taskRouter.use(verifyToken);

taskRouter.get("/", taskController.getAllTasks);

taskRouter.post("/", taskController.createTask);

taskRouter.get("/:id", taskController.getTasksById);

taskRouter.put("/:id", taskController.updateTask);

taskRouter.delete("/:id", taskController.deleteTask);

export default taskRouter;
