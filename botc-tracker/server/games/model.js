const db = require("../db/connection.js");

const fetchGames1 = async () => {
  try {
    const connection = await db.getConnection();
    const [rows] = await connection.query(`SELECT * FROM games`);
    console.log(rows, "rows");
    return rows;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

module.exports = { fetchGames1 };
