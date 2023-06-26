import { DataTypes as DT, Model } from "sequelize";
import bcrypt from "bcrypt";
import connectionDb from "../config/connectionDb.js";

class User extends Model {}

User.init(
  {
    email: {
      type: DT.STRING(50),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DT.STRING,
      allowNull: false,
    },
    salt: {
      type: DT.STRING,
    },
    roleId: {
      type: DT.INTEGER,
      defaultValue: 2,
    },
  },
  {
    sequelize: connectionDb,
    modelName: "User",
  }
);

User.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt();
  user.salt = salt;

  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash;
});


export default User;
