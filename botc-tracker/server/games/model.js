const db = require("../db/connection.js");

const fetchGames1 = async () => {
  try {
    const connection = await db.getConnection();
    const [gameData] = await connection.query(
      `SELECT date, game_won, is_evil, comments, r.name AS starting_role, r1.name as final_role, t.name as type
          FROM games g 
          JOIN roles r ON r.id = g.starting_role_id
          JOIN roles r1 ON r1.id = g.final_role_id
          JOIN types t ON t.id = r.type_id;`
    );
    return gameData;
  } catch (err) {
    throw err;
  }
};

module.exports = { fetchGames1 };
