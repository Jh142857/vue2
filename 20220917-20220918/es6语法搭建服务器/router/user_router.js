import express from "express";
import { getInfoHandler } from "../router_handler/user_ctrl.js";
const userRouter = new express.Router();

userRouter.get('/info', getInfoHandler);

export default userRouter