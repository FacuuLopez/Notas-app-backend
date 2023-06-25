import { Router } from "express";
import {noteController} from "../controllers/noteController.js";

const noteRoutes = Router();

noteRoutes.get("/", noteController.getAllNotesForUser);

noteRoutes.post("/", noteController.createNewNote);

noteRoutes.get("/:noteId", noteController.getNoteById);

noteRoutes.patch("/:noteId", noteController.editNote);

noteRoutes.delete("/:noteId", noteController.deleteNote);

export default noteRoutes;