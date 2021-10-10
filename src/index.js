const express = require("express");
const cors = require("cors");
const routes = require("./routes");

// const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

// const users = [];

routes(app);

module.exports = app;
