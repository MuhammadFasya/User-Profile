const db = require("../config/db");

const getAllUsers = async () => {
  const [rows] = await db.query("select * from users");
  return rows;
};

const getUserById = async (id) => {
  const [row] = await db.query("select * from users where id=?", id);
  return row;
};

const addUser = async (user) => {
  const { name, email, phone } = user;
  const [result] = await db.query(
    "insert into users(name, email, phone) values (?,?,?)",
    [name, email, phone]
  );
  return result.insertId;
};

module.exports = { getAllUsers, getUserById, addUser };
