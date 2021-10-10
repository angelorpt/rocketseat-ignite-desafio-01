require("dotenv").config();
const app = require("./");

app.listen(process.env.API_PORT);
