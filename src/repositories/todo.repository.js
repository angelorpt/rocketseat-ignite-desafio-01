const todoRepository = require("./todo.repository");
const userRepository = require("./user.repository");

const getAll = (username) => {
  const user = userRepository.findByUserName(username);
  const todos = user.todos;
  return todos;
};

const findById = (username, todo_id) => {
  const todos = todoRepository.getAll(username);
  const todo = todos.find((todo) => (todo.id = todo_id));
  return todo;
};

const save = (username, todoData) => {
  const todos = todoRepository.getAll(username);
  todos.push(todoData);
  const todo = todoRepository.findById(username, todo.id);
  return todo;
};

const update = (username, todoData) => {
  let todo = todoRepository.findById(username, todoData.id);
  todo = todoData;
  todo = todoRepository.findById(username, id);
  return todo;
};

const patch = (username, todoData) => {
  let todo = todoRepository.findById(username, todoData.id);
  todo = { ...todo, ...todoData };
  todo = todoRepository.findById(username, todoData.id);
  return todo;
};

const destroy = (username, id) => {
  const todos = todoRepository.getAll(username);
  const newTodos = [];

  todos.forEach((todo) => {
    if (todo.id !== id) {
      newTodos.push(todo);
    }
  });

  const user = userRepository.findByUserName(username);
  user.todos = { ...newTodos };

  const todo = todoRepository.findById(username, id);

  return todo;
};

module.exports = {
  getAll,
  save,
  findById,
  update,
  patch,
  destroy,
};
