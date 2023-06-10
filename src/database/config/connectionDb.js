import { Sequelize } from "sequelize";

const database = "notesapi";
const username = "root";
const password = "";
const host = "localhost";
const port = 3306;
const dialect = "mysql";

const connectionDb = new Sequelize(database, username, password, {
  host,
  port,
  dialect,
});

try {
  await connectionDb.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

export default connectionDb;
