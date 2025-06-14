import { Request, Response, NextFunction } from "express";
import User from "@src/models/user/user";

export const getAllUsers = async (req: Request, res: Response, next: NextFunction): Promise<Response | any> => {
    try {
        const data = await User.find();
        if (data && data.length !== 0) {
            return res.status(200).send({
                message: "Users found",
                payload: data
            })
        }
        res.status(404).send({
            message: "Users not found"
        })
    } catch (e) {
        res.status(500).send(e);
    }
}

export const getUsersById = async (req: Request, res: Response, next: NextFunction): Promise<Response | any> => {
    try {
        const data = await User.findById(req.params.id);
        if (data) {
            return res.status(200).send({
                message: "User found",
                payload: data
            })
        }
        res.status(404).send({
            message: "User not found"
        })
    } catch (e) {
        res.status(500).send(e);
    }
}

export const createUser = async (req: Request, res: Response, next: NextFunction): Promise<Response | any> => {
    try {
        const data = new User({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password
        })
        const result = await data.save();
        if(result) {
            return res.status(201).send({
                message: "User created",
                payload: result
            })
        }
        res.status(404).send({
            message: "User not created"
        })
    } catch(e) {
        res.status(500).send(e);
    }
}

export const updateUser = async (req: Request, res: Response, next: NextFunction): Promise<Response | any> => {
    try {
        const data = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password
        }
        const result = await User.findByIdAndUpdate(req.params.id, data, {new: true});
        if(result) {
            return res.status(200).send({
                message: "User updated",
                payload: result
            })
        }
        res.status(404).send({
            message: "User not updated"
        })
    } catch(e) {
        res.status(500).send(e);
    }
}

export const deleteUser = async (req: Request, res: Response, next: NextFunction): Promise<Response | any> => {
    try {
        const result = await User.findByIdAndDelete(req.params.id);
        if(result) {
            return res.status(200).send({
                message: "User deleted",
                payload: result
            })
        }
        res.status(404).send({
            message: "User not deleted"
        })
    } catch(e) {
        res.status(500).send(e);
    }
}