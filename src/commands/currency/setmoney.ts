module.exports = {
  name: "setmoney",
  permissions: 9,
  execute(msg, args) {
    const SQLite = require("better-sqlite3");
    const sql = new SQLite("./src/databases/currency.sqlite");

    if (!msg.mentions.members.first()) return msg.reply("Ping someone");

    sql
      .prepare("INSERT OR REPLACE INTO currency (id, money) VALUES (?, ?);")
      .run(msg.mentions.members.first()?.id, args[1]);
  },
};
