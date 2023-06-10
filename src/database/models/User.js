import { DataTypes, Model } from "sequelize";
import connectionDb from "../config/connectionDb.js";

class User extends Model {}

User.init(
  {
    username: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
  },
  {
    sequelize: connectionDb,
    modelName: "User",
  }
);

// User.sync();

export default User;
