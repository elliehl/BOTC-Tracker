const express = require("express");
const app = express();
const cors = require("cors");
const { getGames } = require("./games/controller.js");
// const Query = require("./db/queries.js");
// const db = require("/Users/ellielyons/repos/BOTC-Tracker/botc-tracker/server/db");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.listen(9090, (err) => {
  if (err) throw err;
  console.log(`Listening on Port 9090`);
});

// db.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected to database");
// });

// const queries = new Query(db);

app.post("/", (req, res) => {
  let data = req.body;
  queries.addGame(data);
  res.send(JSON.stringify(data));
});

// app.get("/games", async (req, res) => {
//   try {
//     const rows = getGames();
//     res.json(rows);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ err: "Server error" });
//   }
// });

// app.get("/games", getGames);

// const fetchGames1 = () => {
//   return db.query(`SELECT * FROM games;`, (err, res) => {
//     if (err) throw err;
//     console.log(res);
//   });
// };

// fetchGames1();

app.get("/games", getGames);

// app.use(routes);

// module.exports = db;
