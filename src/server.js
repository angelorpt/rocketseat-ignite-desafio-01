import doenv from "dotenv";
import app from "./index.js";

doenv.config();

app.listen(process.env.API_PORT, () => console.log("API Running..."));
