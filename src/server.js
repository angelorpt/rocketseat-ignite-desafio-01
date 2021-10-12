const doenv = require("dotenv");
const app = require("./index");

doenv.config();

app.listen(process.env.API_PORT, () => console.log("API Running..."));
