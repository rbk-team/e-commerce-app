const express = require ("express");
const Card = express.Router();

const {
  getAllproduct,
  addproducts,
  deleteproduct,
 
  
} = require("../controller/Card.js");



Card.get("/getAll", getAllproduct);
Card.post("/add", addproducts);
Card.delete("/delete/:id",deleteproduct);



module.exports = Card;