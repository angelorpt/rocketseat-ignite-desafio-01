const { Router } = require("express");
const userController = require("../controllers/user.controller");
const { checkAlreadyUsedUsername } = userController;

const router = Router();

router.get("/", userController.index);
router.get("/:id", userController.findById);
router.post("/", checkAlreadyUsedUsername, userController.save);

module.exports = router;
