import db from "../database/config.js";

const getUser = async (id) => {
  await db.read();
  const user = db.users.find((user) => (user.id = id));
  return user;
};

const store = async (user) => {
  await db.read();
  db.data.users.push(user);
  await db.write();

  return getUser(user.id);
};

export default { store };
