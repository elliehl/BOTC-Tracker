const db = require("../db/connection.js");

const fetchGames1 = () => {
  console.log(db.query);
  return db.query(`SELECT * FROM games`).then(({ rows }) => {
    return rows[0];
  });
};

module.exports = { fetchGames1 };

// const fetchGames1 = () => {
//   return db.query(`SELECT * FROM games;`, (err, res) => {
//     if (err) throw err;
//     console.log(res);
//   });
// };

// const fetchGames1 = () => {
//   return db
//     .then((conn) => conn.query(`SELECT * FROM games`))
//     .then(([rows, fields]) => console.log(rows[0]));
// };

// const fetchGames = () => {
//   return db.query(`SELECT * FROM games;`).then(({ rows }) => {
//     if (rows.length === 0) {
//       return Promise.reject({ status: 404, message: "Not found" });
//     }
//     console.log(rows[0]);
//     return rows[0];
//   });
// };
