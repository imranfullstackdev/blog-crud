const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Blogpost_db",
  password: "lmvit123",
  port: 5432,
});

module.exports = pool;
