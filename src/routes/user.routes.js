const { Router } = require("express");
const userController = require("../controllers/user.controller");
const { checksExistsUserAccount } = userController;

const router = Router();

router.get("/", userController.index);
router.get("/:id", userController.findById);
router.post("/", checksExistsUserAccount, userController.store);

module.exports = router;
