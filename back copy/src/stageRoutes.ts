import express from "express";
import { validate } from "./middleware/validate";
import {
  createStageController,
  deleteStageController,
  findAllStagesController,
  findStageController,
  updateStageController,
} from "./stage.controller";
import { createStageSchema, updateStageSchema } from "./stage.schema";

const stageRouter = express.Router();

stageRouter
  .route("/")
  .get(findAllStagesController)
  .post(validate(createStageSchema), createStageController);
  stageRouter
  .route("/:stageId")
  .get(findStageController)
  .patch(validate(updateStageSchema), updateStageController)
  .delete(deleteStageController);

export default stageRouter;
