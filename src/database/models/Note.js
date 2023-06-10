import { DataTypes, Model } from "sequelize";
import connectionDb from "../config/connectionDb.js";

class Note extends Model {}

Note.init(
  {
    title: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: connectionDb,
    modelName: "Note",
  }
);

// Note.sync({ force: true });

export default Note;
