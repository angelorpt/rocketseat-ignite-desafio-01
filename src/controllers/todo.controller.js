const todoRepository = require("../repositories/todo.repository");
const { v4: uuidv4 } = require("uuid");

const index = (req, res, next) => {
  const { username } = req.headers;
  const todos = todoRepository.getAll(username);
  return res.status(200).json(todos);
};

const show = (req, res, next) => {
  const { username } = req.headers;
  const { id } = req.params;
  const todo = todoRepository.getAll(username, id);
  return res.status(200).json(todo);
};

const store = (req, res, next) => {
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
  return res.status(200).json(todo);
};

const put = (req, res, next) => {
  const { username } = req.headers;
  const { id } = req.params;
  const { title, deadline, done } = req.body;

  let todo = todoRepository.findById(username, id);

  const todoNew = {
    ...todo,
    title: title,
    done: done,
    deadline: new Date(deadline),
  };

  todo = todoRepository.update(username, todoNew);

  return res.status(200).json(todo);
};

const patch = (req, res, next) => {
  const { username } = req.headers;
  const { id } = req.params;
  const { done } = req.body;

  let todo = todoRepository.findById(username, id);

  const todoNew = {
    ...todo,
    done: done,
  };

  todo = todoRepository.update(username, todoNew);

  return res.status(200).json(todo);
};

const destroy = (req, res, next) => {
  const { username } = req.headers;
  const { id } = req.params;

  const todo = todoRepository.destroy(username, id);

  return res.status(200).json(todo);
};

const invalidTodoId = (req, res, next) => {
  const { username } = req.headers;
  const { id } = req.params;

  const todo = todoRepository.destroy(username, id);

  return res.status(204);
};

module.exports = {
  index,
  show,
  store,
  put,
  patch,
  destroy,
  invalidTodoId,
};
