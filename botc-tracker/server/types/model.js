const db = require("../db/connection.js");

const fetchStatsByRoleType = async () => {
  try {
    const connection = await db.getConnection();
    const [typeData] = await connection.query(
      `SELECT t.name AS type,
       COUNT(g.id) AS games,
       sum(case when game_won = 1 then 1 else 0 end) AS wins
       FROM games g
       JOIN roles r ON r.id = g.starting_role_id
       JOIN types t ON t.id = r.type_id
       GROUP BY type
       ORDER BY games DESC;`
    );
    connection.release();
    return typeData;
  } catch (err) {
    throw err;
  }
};

module.exports = { fetchStatsByRoleType };
