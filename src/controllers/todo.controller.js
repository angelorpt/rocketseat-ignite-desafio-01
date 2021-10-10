const checksExistsUserAccount = (req, res, next) => {
  next();
};

const index = (req, res, next) => {
  res.json({ todos: true });
};

const show = (req, res, next) => {
  res.json({ todos: true });
};

const store = (req, res, next) => {
  res.json({ todos: true });
};

const put = (req, res, next) => {
  res.json({ todos: true });
};

const patch = (req, res, next) => {
  res.json({ todos: true });
};

const destroy = (req, res, next) => {
  res.json({ todos: true });
};

module.exports = {
  checksExistsUserAccount,
  index,
  show,
  store,
  put,
  patch,
  destroy,
};
