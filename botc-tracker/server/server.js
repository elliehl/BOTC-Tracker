const express = require("express");
const app = express();
const cors = require("cors");
const { getGames } = require("./games/controller.js");

const Query = require("./db/queries.js");
const db = require("./db/connection.js");
const queries = new Query(db);

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.listen(9090, (err) => {
  if (err) throw err;
  console.log(`Listening on Port 9090`);
});

app.get("/games", getGames);

app.post("/", (req, res) => {
  let data = req.body;
  queries.addGame(data);
  res.send(JSON.stringify(data));
});
