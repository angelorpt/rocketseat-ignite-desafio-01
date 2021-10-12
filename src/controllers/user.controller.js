import userRepository from "../repositories/user.repository.js";
import { v4 as uuidv4 } from "uuid";

const index = async (req, res) => {
  const users = await userRepository.getAll();
  return res.status(200).json(users);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const user = await userRepository.findById(id);
  if (!user) {
    return res.status(404).json({ message: "Recurso não encontrado" });
  }
  return res.status(200).json(user);
};

const store = async (req, res) => {
  const { name, username } = req.body;
  const userData = {
    id: uuidv4(),
    name,
    username,
    todos: [],
  };
  await userRepository.store(userData);
  const user = await userRepository.findById(userData.id);

  return res.status(201).json(user);
};

export default { index, findById, store };
