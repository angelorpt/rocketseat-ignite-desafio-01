import db from "../database/config.js";

const getAll = async () => {
  await db.read();
  const users = db.data.users;
  return users;
};

const findById = async (id) => {
  await db.read();
  const user = db.data.users.find((user) => user.id === id);
  console.log("user", user);
  return user;
};

const store = async (user) => {
  await db.read();
  db.data.users.push(user);
  await db.write();
};

export default { getAll, findById, store };
