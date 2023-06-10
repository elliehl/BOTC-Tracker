const { fetchGames, deleteGame, postGame } = require("./model.js");

const getGames = (req, res) => {
  fetchGames()
    .then((games) => {
      res.status(200).send({ games });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal server error");
    });
};

const addGame = (req, res) => {
  let data = req.body;
  postGame(data)
    .then(() => {
      res.status(201).send(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal server error");
    });
};

const removeGame = (req, res) => {
  const { game_id } = req.params;
  deleteGame(game_id)
    .then(() => res.sendStatus(204))
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal server error");
    });
};

module.exports = { getGames, removeGame, addGame };
