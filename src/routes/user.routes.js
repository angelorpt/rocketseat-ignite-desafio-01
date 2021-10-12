import { Router } from "express";
import userController from "../controllers/user.controller.js";

const router = Router();

router.get("/", userController.index);
router.get("/:id", userController.findById);
router.post("/", userController.store);

export default router;
