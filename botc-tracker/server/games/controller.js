// const { fetchGames } = require("../db/queries.js");

const { fetchGames1 } = require("./model.js");

const getGames = (req, res, next) => {
  fetchGames1().then((games) => {
    res.status(200).send({ games }).catch(next);
  });
};

module.exports = { getGames };

// const Query = require("../db/queries.js");
// const db = require("../connection.js");

// db.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected to database");
// });

// const queries = new Query(db);
