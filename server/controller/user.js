const db = require("../database/index");

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      const Users = await db.User.findAll({});
      res.status(200).json(Users);
    } catch (err) {
      console.log(err);
    }
  },
  addUsers: async (req, res) => {
    try {
      await db.User.create(req.body);
      res.status(201).json("added successfully");
    } catch (err) {
      console.log(err);
    }
  },
  deleteUser: async (req, res) => {
    const UserId = req.params.id;

    try {
      const result = await db.User.destroy({
        where: { id: UserId }
      });

      if (result) {
        res.status(200).json({ message: 'User deleted successfully' });
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getUser: async (req, res) => {
    const UserId = req.params.id;

    try {
      const User = await db.User.findOne({
        where: { id: UserId }
      });

      if (User) {
        res.status(200).json(User);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
};
