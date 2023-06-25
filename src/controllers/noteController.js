import Note from "../database/models/Note.js";

export const noteController = {
  getAllNotesForUser: async (req, res) => {
    try {
      const notes = await Note.findAll({
        where: {
          userId: req.params.id,
        },
      });
      return res.status(200).json(notes);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  createNewNote: async (req, res) => {
    try {
      const { title, description, img, date } = req.body;
      const newNote = await Note.create({
        title,
        description,
        img,
        date,
        userId: req.params.id,
      });

      return res.status(201).json(newNote);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  getNoteById: async (req, res) => {
    try {
      const note = await Note.findOne({
        where: {
          userId: req.params.id,
          id: req.params.noteId,
        },
      });
      return res.status(200).json(note);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  editNote: async (req, res) => {
    try {
      const note = await Note.findOne({
        where: {
          userId: req.params.id,
          id: req.params.noteId,
        },
      });

      const {
        title = note.title,
        description = note.description,
        img = note.img,
      } = req.body;

      await note.update({
        title,
        description,
        img,
      });

      return res.status(200).json(note);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  deleteNote: async (req, res) => {
    try {
      await Note.destroy({
        where: {
          userId: req.params.id,
          id: req.params.noteId,
        },
      });

      return res.status(200).json({ message: "Note deleted successfully" });
    } catch (error) {
      res.status(400).json(error);
    }
  },
};
