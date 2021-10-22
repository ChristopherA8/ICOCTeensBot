module.exports = {
  name: "resetxp",
  permissions: 9,
  execute(msg) {
    const SQLite = require("better-sqlite3");
    const sql = new SQLite("./src/databases/scores.sqlite");

    sql.prepare("SELECT * FROM scores").get();
    sql.prepare(
      "DELETE FROM scores"
    ).run();
  },
};
