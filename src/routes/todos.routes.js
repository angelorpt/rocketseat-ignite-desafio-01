const express = require("express");
const router = express.Router();

function checksExistsUserAccount(req, res, next) {
  next();
}

router.get("/", checksExistsUserAccount, (req, res) => {
  res.json({ todos: true });
});

router.post("/", checksExistsUserAccount, (req, res) => {
  // Complete aqui
});

router.put("/:id", checksExistsUserAccount, (req, res) => {
  // Complete aqui
});

router.patch("/:id/done", checksExistsUserAccount, (req, res) => {
  // Complete aqui
});

router.delete("/:id", checksExistsUserAccount, (req, res) => {
  // Complete aqui
});

module.exports = router;
