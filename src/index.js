const express = require("express");
const cors = require("cors");
const routes = require("./routes/index");

// const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

routes(app);

module.exports = app;
