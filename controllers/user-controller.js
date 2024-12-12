const e = require("express");
const userModel = require("../models/user-model");
const { error } = require("console");

const getAllUsers = async (req, res) => {
  try {
    const user = await userModel.getAllUsers();
    if (!user) res.json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error Get All users" });
    console.log(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await userModel.getUserById(req.params.id);
    if (!user) res.json({ message: "User not found" });
    res.json(user);
  } catch {
    console.log(error);
    res.json({ message: "Error" });
  }
};

const addUser = async (req, res) => {
  try {
    const newUserId = await userModel.addUser(req.body);
    res.status(200).json({ id: newUserId, ...req.body });
  } catch (error) {
    res.status(500).json({ message: "Error Insert data", error });
  }
};

module.exports = { getAllUsers, getUserById, addUser };
