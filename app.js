import express from 'express';
import connectionDb from "./src/database/config/connectionDb.js";
import cors from "cors";
import routes from "./src/routes/routes.js";
import userSeed from "./src/database/seed/userSeed.js";
import noteSeed from "./src/database/seed/noteSeed.js";
import roleSeed from "./src/database/seed/roleSeed.js";
import "dotenv/config.js";

const port = process.env.SERVER_PORT;
const app = express();

//middleware de aplicacion
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

await connectionDb
  .sync({ force: true })
  .then(() => {
    app.listen(port, () => {
      console.log("server ok http://localhost:8080");
    });
  })
  .then(roleSeed)
  .then(userSeed)
  .then(noteSeed);
