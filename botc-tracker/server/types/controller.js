const { fetchStatsByRoleType } = require("./model.js");

const getStatsByRoleType = (req, res) => {
  fetchStatsByRoleType()
    .then((stats) => {
      res.status(200).send({ stats });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal server error");
    });
};

module.exports = { getStatsByRoleType };
