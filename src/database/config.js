const path = require("path");
const { Low, JSONFile } = require("lowdb");

const __dirname = dirname(fileURLToPath(import.meta.url));

// Use JSON file for storage
const file = path.join(__dirname, "db.json");
const adapter = new JSONFile(file);
const db = new Low(adapter);

module.exports = db;
