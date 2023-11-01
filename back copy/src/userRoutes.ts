import express from "express";
import { validate } from "./middleware/validate";
import {
  createUserController,
  deleteUserController,
  findAllUsersController,
  findUserController,
  updateUserController,
} from "./user.controller";
import { createUserSchema, updateUserSchema } from "./user.schema";

const userRouter = express.Router();

userRouter
  .route("/")
  .get(findAllUsersController)
  .post(validate(createUserSchema), createUserController);
  userRouter
  .route("/:userId")
  .get(findUserController)
  .patch(validate(updateUserSchema), updateUserController)
  .delete(deleteUserController);

export default userRouter;
