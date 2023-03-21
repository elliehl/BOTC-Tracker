class Query {
  constructor(db) {
    this.db = db;
  }
  fetchGames() {
    this.db.query(
      `SELECT date, game_won, is_evil, comments, r.name AS starting_role, t.name as type
       FROM games g 
       JOIN roles r ON r.id = g.starting_role_id
       JOIN types t ON t.id = r.type_id;
       `,
      (err, res) => {
        return res;
      }
    );
  }
  getGameByID(gameId) {
    this.db.query(`SELECT * FROM games WHERE id = ${gameId};`, (err, res) => {
      return console.log(res);
    });
  }
  getMostPlayedRoles() {
    this.db.query(
      `SELECT r.name AS starting_role, COUNT(g.starting_role_id) games_played
       FROM games g
       JOIN roles r ON r.id = g.starting_role_id
       GROUP BY r.name, g.starting_role_id
       ORDER BY games_played DESC;`,
      (err, res) => {
        return console.log(res);
      }
    );
  }
  getMostWinsRoles() {
    this.db.query(
      `SELECT r.name AS starting_role, COUNT(g.game_won) wins 
       FROM games g 
       JOIN roles r ON r.id = g.starting_role_id 
       WHERE g.game_won=true 
       GROUP BY r.name, g.starting_role_id
       ORDER BY wins DESC;`,
      (err, res) => {
        return console.log(res);
      }
    );
  }
  getGamesByAlignment() {
    this.db.query(
      `SELECT is_evil AS evil_aligned, COUNT(is_evil) games_played
       FROM games
       GROUP BY evil_aligned
       ORDER BY games_played DESC;`,
      (err, res) => {
        return console.log(res);
      }
    );
  }
  getWinsByAlignment() {
    this.db.query(
      `SELECT is_evil AS evil_aligned, COUNT(is_evil) wins
       FROM games
       WHERE game_won=true
       GROUP BY evil_aligned
       ORDER BY wins DESC;`,
      (err, res) => {
        return console.log(res);
      }
    );
  }
  addGame(gameData) {
    this.db.query(
      `INSERT INTO games(date, game_won, is_evil, comments, starting_role_id, final_role_id)
       VALUES ('${gameData.date}', ${gameData.result}, ${gameData.alignment}, '${gameData.comments}', ${gameData.startingRole}, ${gameData.finalRole});`
    );
  }
}

module.exports = Query;
