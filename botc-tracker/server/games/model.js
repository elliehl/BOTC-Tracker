const db = require("../server.js");

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected to database");
});

// const fetchGames = () => {
//   return db.query(`SELECT * FROM games;`).then(({ rows }) => {
//     if (rows.length === 0) {
//       return Promise.reject({ status: 404, message: "Not found" });
//     }
//     console.log(rows[0]);
//     return rows[0];
//   });
// };

const fetchGames1 = () => {
  return test.query(`SELECT * FROM games;`, (err, res) => {
    if (err) throw err;
    console.log(res);
  });
};

module.exports = fetchGames1;
