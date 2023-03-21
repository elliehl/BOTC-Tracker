const { fetchGames1 } = require("./model.js");

const getGames = (req, res, next) => {
  fetchGames1().then((games) => {
    res.status(200).send({ games }).catch(next);
  });
};

module.exports = { getGames };
