const db = require("../database/config");

const getAll = () => {
  const users = db.users;
  return users;
};

const findById = (id) => {
  const user = db.users.find((user) => user.id === id);
  return user;
};

const userNameExists = (username) => {
  const user = db.users.some((user) => user.username === username);
  return user;
};

const store = (user) => {
  db.users.push(user);
};

module.exports = { getAll, findById, userNameExists, store };
