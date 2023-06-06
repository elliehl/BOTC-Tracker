const db = require("../db/connection.js");

const fetchGames1 = async () => {
  try {
    const connection = await db.getConnection();
    const [gameData] = await connection.query(
      `SELECT date, game_won, is_evil, comments, r.name AS starting_role, r1.name as final_role, t.name as type, g.id
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

const deleteGame = async (id) => {
  try {
    const connection = await db.getConnection();
    return connection.query(`DELETE FROM games WHERE id = ${id}`);
  } catch (err) {
    throw err;
  }
};

// const addGame = async () => {
//   try {
//     const connection = await db.getConnection();
//     let date = gameData.date === "" ? null : `'${gameData.date}'`;
//     return connection.query(`INSERT INTO games(date, game_won, is_evil, comments, starting_role_id, final_role_id)
//     VALUES (${date}, ${gameData.result}, ${gameData.alignment}, '${gameData.comments}', ${gameData.startingRole}, ${gameData.finalRole});`);
//   } catch (err) {
//     throw err;
//   }
// };

module.exports = { fetchGames1, deleteGame };
