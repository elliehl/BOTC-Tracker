const db = require("../db/connection.js");

const fetchStatsByAlignment = async () => {
  try {
    const connection = await db.getConnection();
    const [alignmentData] = await connection.query(
      `SELECT is_evil,
       COUNT(id) AS games,
       sum(case when game_won = 1 then 1 else 0 end) AS wins
       FROM games g
       GROUP BY is_evil;`
    );
    connection.release();
    return alignmentData;
  } catch (err) {
    throw err;
  }
};

module.exports = { fetchStatsByAlignment };
