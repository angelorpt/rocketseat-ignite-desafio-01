import UserRoutes from "./user.routes.js";
import TodosRoutes from "./todos.routes.js";

const routes = (app) => {
  app.get("/", (req, res) => {
    return res.json({ hello: "world" });
  });

  app.use("/users", UserRoutes);
  app.use("/todos", TodosRoutes);
};

export default routes;
