module.exports = {
  name: "createdb",
  permission: 9,
  execute(msg) {
    const SQLite = require("better-sqlite3");
    const sql = new SQLite("./src/databases/bank.sqlite");

    sql
      .prepare("CREATE TABLE bank (id TEXT PRIMARY KEY, money INTEGER);")
      .run();
    // Ensure that the "id" row is always unique and indexed.
    sql.prepare("CREATE UNIQUE INDEX idx_bank_id ON bank (id);").run();
    sql.pragma("synchronous = 1");
    sql.pragma("journal_mode = wal");
  },
};
