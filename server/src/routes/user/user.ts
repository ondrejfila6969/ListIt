import express, {Router} from "express";

const userRouter: Router = express.Router();

userRouter.get("/", () => {});
userRouter.get("/:id", () => {});
userRouter.post("/", () => {});
userRouter.put("/:id", () => {});
userRouter.delete("/:id", () => {});

export default userRouter;