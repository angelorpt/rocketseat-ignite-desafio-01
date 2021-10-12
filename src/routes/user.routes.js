const { Router } = require("express");
const userController = require("../controllers/user.controller");
const { validateUserExists } = userController;

const router = Router();

router.get("/", userController.index);
router.get("/:id", userController.findById);
router.post("/", validateUserExists, userController.store);

module.exports = router;
