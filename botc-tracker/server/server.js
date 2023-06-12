const express = require("express");
const app = express();
const cors = require("cors");
const { getGames, removeGame, addGame } = require("./games/controller.js");
const { getStatsByAlignment } = require("./stats/controller.js");

const Query = require("./db/queries.js");
const db = require("./db/connection.js");
const { getStatsByRoleType } = require("./types/controller.js");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.listen(9090, (err) => {
  if (err) throw err;
  console.log(`Listening on Port 9090`);
});

app.get("/games", getGames);
app.get("/alignment", getStatsByAlignment);
app.get("/type", getStatsByRoleType);
app.delete("/games/:game_id", removeGame);
app.post("/", addGame);
