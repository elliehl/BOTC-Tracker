const { fetchGames1 } = require("./model.js");

const getGames = (req, res) => {
  fetchGames1()
    .then((games) => {
      res.status(200).send({ games });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal server error");
    });
};

module.exports = { getGames };
