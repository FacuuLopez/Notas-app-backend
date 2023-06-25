import Note from "./Note.js";
import Role from "./Role.js";
import User from "./User.js";

User.hasMany(Note, {
  foreignKey: "userId",
});
Note.belongsTo(User, {
  foreignKey: "userId",
});

Role.hasMany(User,{
  foreignKey: "userId",
});

User.belongsTo(User,{
  foreignKey: "userId",
});

export { Note, User, Role };
