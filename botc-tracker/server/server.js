const express = require("express");
require("dotenv").config();
const mysql = require("mysql2");
const app = express();
const cors = require("cors");
const { getGames } = require("./games/controller.js");
const Query = require("./db/queries.js");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.listen(9090, (err) => {
  if (err) throw err;
  console.log(`Listening on Port 9090`);
});

const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected to database");
});

const queries = new Query(db);

app.post("/", (req, res) => {
  let data = req.body;
  queries.addGame(data);
  res.send(JSON.stringify(data));
});

// const fetchGames1 = () => {
//   return db.query(`SELECT * FROM games;`, (err, res) => {
//     if (err) throw err;
//     console.log(res);
//   });
// };

app.get("/games", getGames());

module.exports = db;
