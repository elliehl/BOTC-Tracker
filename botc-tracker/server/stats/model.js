const db = require("../db/connection.js");

const fetchStatsByAlignment = async () => {
  try {
    const connection = await db.getConnection();
    const [alignmentData] = await connection.query(
      `SELECT is_evil, COUNT(game_won) AS wins
       FROM games g
       WHERE game_won = 1
       GROUP BY is_evil;`
    );
    return alignmentData;
  } catch (err) {
    throw err;
  }
};

module.exports = { fetchStatsByAlignment };
