const db = require("../db/connection.js");

const fetchStatsByRole = async () => {
  try {
    const connection = await db.getConnection();
    const [roleData] = await connection.query(
      `SELECT r.name AS starting_role,
       COUNT(g.id) AS games,
       sum(case when game_won = 1 then 1 else 0 end) AS wins
       FROM games g
       JOIN roles r ON r.id = g.starting_role_id
       GROUP BY starting_role;`
    );
    connection.release();
    return roleData;
  } catch (err) {
    throw err;
  }
};

module.exports = { fetchStatsByRole };
