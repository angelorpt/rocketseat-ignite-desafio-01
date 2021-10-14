const todoRepository = require("../repositories/todo.repository");
const { v4: uuidv4 } = require("uuid");

const checksExistsToDo = (req, res, next) => {
  const { username } = req.headers;
  const { id } = req.params;
  const todo = todoRepository.findById(username, id);
  if (!todo) {
    return res.status(404).json({ error: "ToDo não encontrado" });
  }
  next();
};

const index = (req, res, next) => {
  const { username } = req.headers;
  const todos = todoRepository.getAll(username);
  return res.status(200).json(todos);
};

const show = (req, res, next) => {
  const { username } = req.headers;
  const { id } = req.params;
  const todo = todoRepository.findById(username, id);
  return res.status(200).json(todo);
};

const save = (req, res, next) => {
  const { username } = req.headers;
  const { title, deadline } = req.body;

  const todoNew = {
    id: uuidv4(), // precisa ser um uuid
    title: title,
    done: false,
    deadline: new Date(deadline),
    created_at: new Date(),
  };

  const todo = todoRepository.save(username, todoNew);
  return res.status(201).json(todo);
};

const put = (req, res, next) => {
  const { username } = req.headers;
  const { id } = req.params;
  const { title, deadline } = req.body;

  let todo = todoRepository.findById(username, id);

  const todoNew = {
    ...todo,
    title: title,
    deadline: new Date(deadline),
  };

  todo = todoRepository.update(username, todoNew);

  return res.status(200).json(todo);
};

const patch = (req, res, next) => {
  const { username } = req.headers;
  const { id } = req.params;

  let todo = todoRepository.findById(username, id);

  const todoNew = {
    ...todo,
    done: true,
  };

  todo = todoRepository.update(username, todoNew);

  return res.status(200).json(todo);
};

const destroy = (req, res, next) => {
  const { username } = req.headers;
  const { id } = req.params;

  const todo = todoRepository.destroy(username, id);
  if (!todo) {
    return res.status(422).json({ error: "Falha ao tentar deletar a tarefa" });
  }

  return res.status(204).json({ message: "Tarefa deletada com sucesso" });
};

module.exports = {
  index,
  show,
  save,
  put,
  patch,
  destroy,
  checksExistsToDo,
};
