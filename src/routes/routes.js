//Modulos Node JS
import { Router } from "express";
import userRoutes from "./userRoutes.js";
import noteRoutes from "./noteRoutes.js";

const routes= Router()

routes.use("/users", userRoutes);
routes.use("/notes", noteRoutes);

//Exportar
export default routes;
