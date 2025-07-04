import { Request, Response, NextFunction } from "express";
import User from "@src/models/user/user";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import mongoose from "mongoose";

/* USER AUTH */
export const login = async (req: Request, res: Response, next: NextFunction): Promise<Response | any> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Enter your email and password." });
    }

    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Wrong email or password." });
    }

    const token = jwt.sign({ userId: user._id, email }, String(process.env.TOKEN_KEY), {
      expiresIn: "2h",
    });

    res.status(200).json({ user, token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const register = async (req: Request, res: Response, next: NextFunction): Promise<Response | any> => {
  try {
    const { first_name, last_name, email, password } = req.body;

    if (!(first_name && last_name && email && password))
      return res.status(400).send({ message: "All fields are required!" });

    const userExist = await User.findOne({ email });
    if (userExist)
      return res
        .status(400)
        .send({ message: "This email is already registered." });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      first_name,
      last_name,
      email: email.toLowerCase(),
      password: hashedPassword,
    });

    const token = jwt.sign({ userId: user._id, email }, String(process.env.TOKEN_KEY), {
      expiresIn: "2h",
    });

    res.status(201).json({ token, user: { first_name, last_name, email } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

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
