import express, {Router} from "express";
import * as userController from "@src/controllers/user/user";

const userRouter: Router = express.Router();

userRouter.get("/", userController.getAllUsers);
userRouter.get("/:id", userController.getUsersById);
userRouter.post("/", userController.createUser);
userRouter.put("/:id", userController.updateUser);
userRouter.delete("/:id", userController.deleteUser);

export default userRouter;