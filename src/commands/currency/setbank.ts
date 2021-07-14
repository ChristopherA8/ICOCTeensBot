module.exports = {
  name: "setbank",
  permissions: 9,
  execute(msg, args) {
    const SQLite = require("better-sqlite3");
    const sql = new SQLite("./src/databases/bank.sqlite");

    if (!msg.mentions.members.first()) return msg.reply("Ping someone");

    sql
      .prepare("INSERT OR REPLACE INTO bank (id, money) VALUES (?, ?);")
      .run(msg.mentions.members.first()?.id, args[1]);
  },
};
