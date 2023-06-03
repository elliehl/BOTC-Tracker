const { fetchStatsByAlignment } = require("./model.js");

const getStatsByAlignment = (req, res) => {
  fetchStatsByAlignment()
    .then((stats) => {
      res.status(200).send({ stats });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal server error");
    });
};

module.exports = { getStatsByAlignment };
