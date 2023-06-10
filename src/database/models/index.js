import Note from "./Note.js";
import User from "./User.js";

User.hasMany(Note, {
  foreignKey: "userId",
});
Note.belongsTo(User, {
  foreignKey: "userId",
});

export { Note, User };
