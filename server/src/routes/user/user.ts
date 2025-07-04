import express, {Router} from "express";
import * as userController from "@src/controllers/user/user";
import { verifyToken } from "@src/middlewares/auth";

const userRouter: Router = express.Router();

userRouter.post("/login", userController.login);

userRouter.post("/register", userController.register);

userRouter.get("/", verifyToken, userController.getAllUsers);

userRouter.put("/:id", userController.updateUser);

userRouter.delete("/:id", userController.deleteUser);

userRouter.get("/:id", userController.getUsersById);

export default userRouter;