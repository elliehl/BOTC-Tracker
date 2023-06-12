const { fetchStatsByRole } = require("./model.js");

const getStatsByRole = (req, res) => {
  fetchStatsByRole()
    .then((stats) => {
      res.status(200).send({ stats });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal server error");
    });
};

module.exports = { getStatsByRole };
