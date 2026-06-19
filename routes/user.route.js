import express from "express";
import {
  createUser,
  getParamsUser,
  getUsers,
} from "../controllers/userContollers.js";
import { logMiddleware } from "../middlewares/logmiddleware.js";
import { middleware2 } from "../middlewares/middleware2.js";
export const userRouter = express.Router();

userRouter.get("/ok", logMiddleware, middleware2, getUsers);

userRouter.post("/create", createUser);
userRouter.get("/one/:params", getParamsUser);
