import { Role } from "../models/index.js"

const roleSeed = async () => {
  try {
    await Role.bulkCreate([{ roleName: "admin" }, { roleName: "user" }]);
  } catch (error) {
    console.log(error.message)
  }
};

export default roleSeed
