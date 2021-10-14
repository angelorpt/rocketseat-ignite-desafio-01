const UserRoutes = require("./user.routes");
const TodosRoutes = require("./todos.routes");

const routes = (app) => {
  app.get("/", (_, res) => {
    return res.json({ hello: "world" });
  });

  app.use("/users", UserRoutes);
  app.use("/todos", TodosRoutes);
};

module.exports = routes;
