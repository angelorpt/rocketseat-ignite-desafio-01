const { Router } = require("express");
const userController = require("../controllers/user.controller");
const todoController = require("../controllers/todo.controller");

const router = Router();
const { checksExistsUserAccount } = userController;
const { checksExistsToDo } = todoController;

router.use(checksExistsUserAccount);
router.get("/", todoController.index);
router.get("/:id", checksExistsToDo, todoController.show);
router.post("/", todoController.save);
router.put("/:id", checksExistsToDo, todoController.put);
router.patch("/:id/done", checksExistsToDo, todoController.patch);
router.delete("/:id", checksExistsToDo, todoController.destroy);
// router.delete(
//   "/invalid-todo-id",
//
//   todoController.destroy
// );

module.exports = router;
