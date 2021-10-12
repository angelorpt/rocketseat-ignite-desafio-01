import userRepository from "../repositories/user.repository.js";
import { v4 as uuidv4 } from "uuid";

const index = (req, res) => {
  res.json({ users: true });
};

const store = (req, res) => {
  const { name, username } = req.body;
  const userData = {
    id: uuidv4(),
    name,
    username,
    todos: [],
  };
  const user = userRepository.store(userData);
  return res.status(201).json(user);
};

export default { index, store };
