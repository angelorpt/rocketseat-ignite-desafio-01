const userRepository = require("../repositories/user.repository");
const { v4: uuidv4 } = require("uuid");

const checksExistsUserAccount = (req, res, next) => {
  const { username } = req.body;
  const userNameExists = userRepository.userNameExists(username);
  if (userNameExists) {
    return res.status(400).send({ error: "Este username já possui cadastro" });
  } else {
    next();
  }
};

const index = (req, res) => {
  const users = userRepository.getAll();
  return res.status(200).json(users);
};

const findById = (req, res) => {
  const { id } = req.params;
  const user = userRepository.findById(id);
  if (!user) {
    return res.status(404).json({ message: "Recurso não encontrado" });
  }
  return res.status(200).json(user);
};

const store = (req, res) => {
  const { name, username } = req.body;
  const userData = {
    id: uuidv4(),
    name,
    username,
    todos: [],
  };
  userRepository.store(userData);
  const user = userRepository.findById(userData.id);

  return res.status(201).json(user);
};

module.exports = { checksExistsUserAccount, index, findById, store };
