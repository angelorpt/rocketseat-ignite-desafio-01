const index = (req, res) => {
  res.json({ users: true });
};

const store = (req, res) => {
  //
};

module.exports = { index, store };
