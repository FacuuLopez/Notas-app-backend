//Modulos Node JS
import express, { json, urlencoded } from "express";
import connectionDb from "./database/config/connectionDb.js";

//App
const app = express();

//Levantar Servidor
app.set("port", process.env.PORT || 9000);

await connectionDb.sync({ force: false }).then(() => {
  app.listen(app.get("port"), () => {
    console.log("Server started", app.get("port"));
  });
});

//Encoded
app.use(json());
app.use(urlencoded({ extended: true }));

//Rutas
import apiRoutes from "./routes/apiRoutes.js";

app.use("/api/user", apiRoutes);
