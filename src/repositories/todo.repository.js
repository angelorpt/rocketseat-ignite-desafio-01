const userRepository = require("./user.repository");

const getAll = (username) => {
  const user = userRepository.findByUserName(username);
  return user.todos;
};

const findById = (username, todo_id) => {
  const todos = getAll(username);
  const todo = todos.find((todo) => todo.id === todo_id);
  return todo;
};

const save = (username, todoData) => {
  const todos = getAll(username);
  todos.push(todoData);
  const todo = findById(username, todoData.id);
  return todo;
};

const update = (username, todoData) => {
  let todo = findById(username, todoData.id);
  let todos = getAll(username);
  let todosNew = todos.map((todo) => {
    if (todo.id === todoData.id) {
      return {
        ...todoData,
      };
    }
    return todo;
  });
  let user = userRepository.findByUserName(username);
  user.todos = [...todosNew];
  todo = findById(username, todoData.id);
  return todo;
};

const patch = (username, todoData) => {
  let todo = findById(username, todoData.id);
  todo = { ...todo, ...todoData };
  todo = findById(username, todoData.id);
  return todo;
};

const destroy = (username, id) => {
  const todos = getAll(username);
  const newTodos = [];

  todos.forEach((todo) => {
    if (todo.id !== id) {
      newTodos.push(todo);
    }
  });

  const user = userRepository.findByUserName(username);
  user.todos = [...newTodos];

  const todo = findById(username, id);
  return todo === undefined;
};

module.exports = {
  getAll,
  save,
  findById,
  update,
  patch,
  destroy,
};
