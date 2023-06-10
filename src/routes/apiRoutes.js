//Modulos Node JS
import { Router } from "express";
import { userController } from "../controllers/userController.js";
import { noteController } from "../controllers/noteController.js";

//Router
const router = Router();

//Rutas
router.get("/", userController.getAllUsers);

router.post("/", userController.createNewUser);

router.get("/:id", userController.getUserById);

router.patch("/:id", userController.editUser);

router.delete("/:id", userController.deleteUser);

router.get("/:id/note", noteController.getAllNotesForUser);

router.post("/:id/note", noteController.createNewNote);

router.get("/:id/note/:noteId", noteController.getNoteById);

router.patch("/:id/note/:noteId", noteController.editNote);

router.delete("/:id/note/:noteId", noteController.deleteNote);

//Exportar
export default router;
