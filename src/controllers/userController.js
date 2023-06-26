import {User} from "../database/models/index.js";

export const userController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.findAll();
      return res.status(200).json(users);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  createNewUser: async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const newUser = await User.create({
        username,
        email,
        password,
      });

      return res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  getUserById: async (req, res) => {
    try {
      const user = await User.findOne({
        where: {
          id: req.params.id,
        },
      });
      return res.status(200).json(user);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  editUser: async (req, res) => {
    try {
      const user = await User.findOne({
        where: {
          id: req.params.id,
        },
      });

      const { username = user.username, email = user.email } = req.body;

      await user.update({
        username,
        email,
      });

      return res.status(200).json(user);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  deleteUser: async (req, res) => {
    try {
      await User.destroy({
        where: {
          id: req.params.id,
        },
      });

      return res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(400).json(error);
    }
  },
};
