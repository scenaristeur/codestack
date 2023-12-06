import express from "express";
import { validate } from "./middleware/validate";
import {
  createNoteController,
  deleteNoteController,
  findAllNotesController,
  findNoteController,
  updateNoteController,
} from "./note.controller";
import { createNoteSchema, updateNoteSchema } from "./note.schema";

const noteRouter = express.Router();

noteRouter
  .route("/")
  .get(findAllNotesController)
  .post(validate(createNoteSchema), createNoteController);
  noteRouter
  .route("/:noteId")
  .get(findNoteController)
  .put(validate(updateNoteSchema), updateNoteController)
  .delete(deleteNoteController);

export default noteRouter;
