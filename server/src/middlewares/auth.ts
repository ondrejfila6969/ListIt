import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { Request, Response, NextFunction } from "express";

dotenv.config();

export const verifyToken = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.headers["authorization"];
  if (!token) {
    res.status(403).json({ message: "A token is required for authentication" });
    return;
  }
  try {
    const decoded = jwt.verify(token.split(" ")[1], String(process.env.TOKEN_KEY));
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};