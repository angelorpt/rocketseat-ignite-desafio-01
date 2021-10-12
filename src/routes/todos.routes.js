const { Router } = require("express");
const todoController = require("../controllers/todo.controller");

const router = Router();
const { checksExistsUserAccount } = todoController;

router.get("/", checksExistsUserAccount, todoController.index);
router.get("/:id", checksExistsUserAccount, todoController.show);
router.post("/", checksExistsUserAccount, todoController.store);
router.put("/:id", checksExistsUserAccount, todoController.put);
router.patch("/:id/done", checksExistsUserAccount, todoController.patch);
router.delete("/:id", checksExistsUserAccount, todoController.destroy);

module.exports = router;
