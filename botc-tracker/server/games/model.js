const db = require("../db/connection.js");

const fetchGames = async () => {
  try {
    const connection = await db.getConnection();
    const [gameData] = await connection.query(
      `SELECT date, game_won, is_evil, comments, r.name AS starting_role, r1.name as final_role, t.name as type, g.id
          FROM games g 
          JOIN roles r ON r.id = g.starting_role_id
          JOIN roles r1 ON r1.id = g.final_role_id
          JOIN types t ON t.id = r.type_id;`
    );
    connection.release();
    return gameData;
  } catch (err) {
    throw err;
  }
};

const deleteGame = async (id) => {
  try {
    const connection = await db.getConnection();
    const result = await connection.query(`DELETE FROM games WHERE id = ${id}`);
    connection.release();
    return result;
  } catch (err) {
    throw err;
  }
};

const postGame = async (gameData) => {
  try {
    const connection = await db.getConnection();
    let date = gameData.date === "" ? null : `'${gameData.date}'`;
    const result =
      await connection.query(`INSERT INTO games(date, game_won, is_evil, comments, starting_role_id, final_role_id)
    VALUES (${date}, ${gameData.result}, ${gameData.alignment}, "${gameData.comments}", ${gameData.startingRole}, ${gameData.finalRole});`);
    connection.release();
    return result;
  } catch (err) {
    throw err;
  }
};

const updateGame = async (gameData, id) => {
  try {
    const connection = await db.getConnection();
    let date = gameData.date === "" ? null : `'${gameData.date}'`;
    const result = await connection.query(
      `UPDATE games
       SET date = ${date}, game_won = ${gameData.result}, is_evil = ${gameData.alignment}, comments = "${gameData.comments}", starting_role_id = ${gameData.startingRole}, final_role_id = ${gameData.finalRole}
       WHERE id = ${id};`
    );
    connection.release();
    return result;
  } catch (err) {
    throw err;
  }
};

module.exports = { fetchGames, deleteGame, postGame, updateGame };
