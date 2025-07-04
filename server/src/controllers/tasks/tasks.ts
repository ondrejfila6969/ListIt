import { Request, Response, NextFunction } from "express";
import Task from "@src/models/tasks/tasks";
import { JwtPayload } from "jsonwebtoken";

export const getAllTasks = async (req: Request, res: Response, next: NextFunction): Promise<Response | any> => {
    try {
        const userId = (req.user as JwtPayload).userId;

        const data = await Task.find({user: userId}).populate("user", "-password");
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
        const userId = (req.user as JwtPayload).userId;
        const data = await Task.findOne({_id: req.params.id, user: userId})
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

        const userId = (req.user as JwtPayload).userId;

        const data = new Task({
            name: req.body.name,
            description: req.body.description,
            completed: req.body.completed,
            deadlineDate: req.body.deadlineDate,
            priority: req.body.priority,
            user: userId
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
        const userId = (req.user as JwtPayload).userId;
        const data = {
            name: req.body.name,
            description: req.body.description,
            completed: req.body.completed,
            deadlineDate: req.body.deadlineDate,
            priority: req.body.priority
        }
        const result = await Task.findOneAndUpdate({_id: req.params.id, user: userId}, data, {new: true});
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
        const userId = (req.user as JwtPayload).userId;
        const result = await Task.findOneAndDelete({_id: req.params.id, user: userId});
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