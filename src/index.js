import express from "express";
import cors from "cors";
import routes from "./routes/index.js";

// const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

routes(app);

export default app;
