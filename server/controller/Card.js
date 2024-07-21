const db = require("../database/index");

module.exports = {
  getAllproduct: async (req, res) => {
    try {
      const products = await db.Card.findAll({});
      res.status(200).json(products);
    } catch (err) {
      console.log(err);
    }
  },
  addproducts: async (req, res) => {
    try {
      await db.Card.create(req.body);
      res.status(201).json("added successfully");
    } catch (err) {
      console.log(err);
    }
  },
  deleteproduct: async (req, res) => {
    const CardId = req.params.id;

    try {
      const result = await db.Card.destroy({
        where: { id: CardId }
      });

      if (result) {
        res.status(200).json({ message: 'prod deleted successfully' });
      } else {
        res.status(404).json({ error: 'prod not found' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

 
}