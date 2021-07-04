module.exports = {
  name: "createdb",
  permission: 9,
  execute(msg) {
    const SQLite = require("better-sqlite3");
    const sql = new SQLite("./src/databases/currency.sqlite");

    sql
      .prepare("CREATE TABLE currency (id TEXT PRIMARY KEY, money INTEGER);")
      .run();
    // Ensure that the "id" row is always unique and indexed.
    sql.prepare("CREATE UNIQUE INDEX idx_currency_id ON currency (id);").run();
    sql.pragma("synchronous = 1");
    sql.pragma("journal_mode = wal");
  },
};
