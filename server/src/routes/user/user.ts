import express, {Router} from "express";
import * as userController from "@src/controllers/user/user";
import { verifyToken } from "@src/middlewares/auth";

const userRouter: Router = express.Router();

userRouter.get("/", verifyToken, userController.getAllUsers);

userRouter.get("/:id", userController.getUsersById);

userRouter.post("/login", userController.login);

userRouter.post("/register", userController.register);

userRouter.post("/", userController.createUser);

userRouter.put("/:id", userController.updateUser);

userRouter.delete("/:id", userController.deleteUser);

export default userRouter;