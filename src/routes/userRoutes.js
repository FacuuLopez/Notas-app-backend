import { Router } from "express";
import { userController } from "../controllers/userController.js";

const userRoutes = Router();

userRoutes.get("/", userController.getAllUsers);

userRoutes.post("/", userController.createNewUser);

userRoutes.get("/:id", userController.getUserById);

userRoutes.patch("/:id", userController.editUser);

userRoutes.delete("/:id", userController.deleteUser);

export default userRoutes;
