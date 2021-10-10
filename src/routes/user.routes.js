const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ users: true });
});

router.post("/", (req, res) => {
  // Complete aqui
});

module.exports = router;
