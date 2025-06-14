import { Request, Response, NextFunction } from "express";
import Task from "@src/models/tasks/tasks";

export const getAllTasks = async (req: Request, res: Response, next: NextFunction): Promise<Response | any> => {
    try {
        const data = await Task.find();
        if (data && data.length !== 0) {
            return res.status(200).send({
                message: "Tasks found",
                payload: data
            })
        }
        res.status(404).send({
            message: "Tasks not found"
        })
    } catch (e) {
        res.status(500).send(e);
    }
}

export const getTasksById = async (req: Request, res: Response, next: NextFunction): Promise<Response | any> => {
    try {
        const data = await Task.findById(req.params.id);
        if (data) {
            return res.status(200).send({
                message: "Task found",
                payload: data
            })
        }
        res.status(404).send({
            message: "Task not found"
        })
    } catch (e) {
        res.status(500).send(e);
    }
}

export const createTask = async (req: Request, res: Response, next: NextFunction): Promise<Response | any> => {
    try {
        const data = new Task({
            name: req.body.name,
            description: req.body.description,
            completed: req.body.completed,
            deadlineDate: req.body.deadlineDate,
            priority: req.body.priority,
        })
        const result = await data.save();
        if(result) {
            return res.status(201).send({
                message: "Task created",
                payload: result
            })
        }
        res.status(404).send({
            message: "Task not created"
        })
    } catch(e) {
        res.status(500).send(e);
    }
}

export const updateTask = async (req: Request, res: Response, next: NextFunction): Promise<Response | any> => {
    try {
        const data = {
            name: req.body.name,
            description: req.body.description,
            completed: req.body.completed,
            deadlineDate: req.body.deadlineDate,
            priority: req.body.priority
        }
        const result = await Task.findByIdAndUpdate(req.params.id, data, {new: true});
        if(result) {
            return res.status(200).send({
                message: "Task updated",
                payload: result
            })
        }
        res.status(404).send({
            message: "Task not updated"
        })
    } catch(e) {
        res.status(500).send(e);
    }
}

export const deleteTask = async (req: Request, res: Response, next: NextFunction): Promise<Response | any> => {
    try {
        const result = await Task.findByIdAndDelete(req.params.id);
        if(result) {
            return res.status(200).send({
                message: "Task deleted",
                payload: result
            })
        }
        res.status(404).send({
            message: "Task not deleted"
        })
    } catch(e) {
        res.status(500).send(e);
    }
}