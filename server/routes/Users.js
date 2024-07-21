
const express = require("express");
const user = express.Router();

const{
    getAllUsers,
    addUsers,
    deleteUser,
    getUser,
  }=require("../controller/user.js");

user.get("/getAll", getAllUsers);
user.post("/add", addUsers);
user.delete("/delete/:id",deleteUser);
user.get("/:id",getUser);

module.exports = user;